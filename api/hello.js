//this is a simple API route, a serverless function 
// that will return a JSON response saying "Hello World"
export default async function handler(req, res){
    res.status(200).json({ message: 'Hello World' });
}