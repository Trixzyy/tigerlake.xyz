import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
    email: string;
    message: string;
};

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body as Data;

    if (!data) return res.status(500).json({ result: "Nice try :)" });

    if (data.message.length < 1 || data.email.length < 1) return res.status(500).json({ result: "FIELD_EMPTY" });

    if (!emailRegex.test(data.email)) return res.status(500).json({ result: "INVALID_EMAIL_FORMAT" });

    if (data.message.length > 1000) return res.status(500).json({ result: "MESSAGE_TOO_LONG" });
    if (data.email.length > 500) return res.status(500).json({ result: "EMAIL_TOO_LONG" });

    axios
        .post(process.env.WEBHOOK_URL as string, {
            embeds: [
                {
                    color: 3108090,
                    title: data.email,
                    author: {
                        name: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "unknown!?",
                    },
                    description: data.message,
                },
            ],
        })
        .then((response) => {
            if (response.data.err) return res.status(500).json({ result: "DISCORD_API_ERROR" });
            return res.status(200).json({ result: "Success" });
        });
}
