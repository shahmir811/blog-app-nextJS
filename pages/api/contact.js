import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		// Store it in a database
		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		try {
			// client = await MongoClient.connect(
			// 	'mongodb+srv://shahmir:ZGEfa42oTR8jV7QV@cluster0.a3owr.mongodb.net/nextjs-blog-app?retryWrites=true&w=majority'
			// );

			client = await MongoClient.connect(process.env.DB_CONNECTION_STRING);
		} catch (error) {
			res.status(500).json({ message: "Sorry, couldn't connect to the database server" });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Storing message in database server failed' });
			return;
		}

		client.close();
		res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
	}
};

export default handler;
