import { mailOptions, transport } from "@/config/nodemailer"
import { NextResponse } from "next/server"

export async function GET() {

    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

    const data = await res.json()
    return Response.json({ data })
  }

  export async function POST(Request) {
    const data = await Request.json()
    console.log('data', data)
    const { name, email, message } = data

    try {
        await transport.sendMail({
            ...mailOptions,
            subject: `A new email from ${name} :D`,
            text: message
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }


    return NextResponse.json(data)
  }