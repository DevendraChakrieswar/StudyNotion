const Tag = require('../model/Category');

// create Tag handler

exports.createTag = async (req, res) => {
    try{
        const {name, description} = req.body;
        if(!name || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }
        // create entry in DB
        const tagDetails = await Tag.create({
            name: name,
            description: description,
        });
        console.log(tagDetails);

        // return response
        return res.status(200).json({
            success: true,
            message: 'Tag created successfully'
        })
    }
    catch(err) {
        return re.status(500).json({
            success: false,
            message: err.message,
        })
    }
};

// getAllTags handler function

exports.showAlltags = async (req, res) => {
    try{
        const allTags = await Tag.find({}, {name:true, description:true});
        res.status(200).json({
            success: true,
            message: "All tags returned successfully",
            allTags,
        })
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}