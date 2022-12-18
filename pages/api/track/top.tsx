import {NextApiRequest, NextApiResponse} from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        labels: [0, 1, 2, 3, 4, 5],
        datasets: [
            {
                label: 'Dataset 1',
                data: [0, 100, 20, 145, 35, 100],
                backgroundColor: 'rgba(84,59,208,0.5)'
            }
        ]
    })
}

export default handler