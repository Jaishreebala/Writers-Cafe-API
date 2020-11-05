const Writtenwork = require("../models/Writtenwork");

// @desc    Get All Written Works
// @route   GET | api/v1/writtenWorks
// @access  public

exports.getAllWrittenWorks = async (req, res) => {
    try {
        const writtenWorks = await Writtenwork.find();
        res.status(200).json({ success: true, data: writtenWorks });
    }
    catch (err) {
        res.status(400).json({ success: false });
    }
}

// @desc    Get Written Work By ID
// @route   GET | api/v1/writtenWorks/:id
// @access  public

exports.getWrittenWorkById = async (req, res) => {
    try {
        const writtenWork = await Writtenwork.findById(req.params.id);
        if (!writtenWork) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: writtenWork });
    }
    catch (err) {
        res.status(400).json({ success: false });
    }
}

// @desc    Create New Written Work
// @route   POST | api/v1/writtenWorks
// @access  private

exports.createNewWrittenWork = async (req, res) => {
    try {
        console.log(req.body);
        const writtenWork = await Writtenwork.create(req.body);
        res.status(200).json({ success: true, data: writtenWork });
    }
    catch (err) {
        res.status(400).json({ success: false });

        console.log(err)
    }
}

// @desc    Update Written Work By ID
// @route   PUT | api/v1/writtenWorks/:id
// @access  private

exports.updateWrittenWorkById = async (req, res) => {
    try {
        const writtenWork = await Writtenwork.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });
        if (!writtenWork)
            return res.status(400).json({ success: false });
        res.status(200).json({ success: true, data: writtenWork });
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ success: false });

    }
}

// @desc    Delete Written Work By ID
// @route   DELETE | api/v1/writtenWorks/:id
// @access  public

exports.deleteWrittenWorkById = async (req, res) => {
    try {
        const writtenWork = await Writtenwork.findByIdAndDelete(req.params.id);
        if (!writtenWork)
            return res.status(400).json({ success: false });
        res.status(200).json({ success: true, data: {} });
    }
    catch (err) {
        res.status(400).json({ success: false });
    }
}