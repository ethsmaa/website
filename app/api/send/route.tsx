import Airtable from 'airtable'


const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base('appKmy1HiNXODrzfB')
const table = base.table('tblRVS05vl9xhk9aW') // website table


export async function POST(req: Request) {
  const body = await req.json();

  const { email, subject, message } = body;

  try {
    const data = await table.create({
      email,
      subject,
      message
    })

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 })
  }
}
