//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = async (req,res) =>{
    res.status(200).json({message: "Get all contacts"});
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = async (req,res) =>{
    console.log("The request body is:", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message: "Create contact"});
};

//@desc Get new contacts
//@route GET /api/contacts/:id
//@access public
const getContact = async (req,res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@desc Update new contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};

//@desc Delete new contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async (req,res) => {
    res.json({message: `Delete contact for ${req.params.id}`});
};

module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};