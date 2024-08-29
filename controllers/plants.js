module.exports = {
    index
}




async function index(req, res) {
    
    const key = process.env.PERENUAL_API_KEY
    const url = req.body.url + (req.body.url.includes('?') ? `&key=${key}` : `?key=${key}`) 
    const resObj = await fetch(url)
    const data = await resObj.json()
    res.json(data)
}