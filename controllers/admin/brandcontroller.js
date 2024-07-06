import brandmodel from "../../models/admin/addbrandmodel.js";

const getbrandform = async function (req, res) {
    try {


    }
    catch (err) {
        res.send("or ")
    }
    res.render("admin/addbrand.ejs")

}
const brandinsert = async function (req, res) {
    // console.log(req.body);
    try {
        var instance = new brandmodel(req.body)
        var ans = await instance.save()
    }
    catch (err) {
        res.send("err")
    }


}

export { getbrandform, brandinsert }