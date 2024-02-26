import fs from 'fs/promises'
import pdfFile from './example.pdf'
import { useLoaderData } from '@remix-run/react'

export async function loader() {
    const filepath = '.' + pdfFile
    const contents = await fs.readFile(filepath)
    return { contents: contents.length }
}

export default function SomeRoute() {
    const { contents } = useLoaderData<typeof loader>()
    return (
        <div>bytes {contents}</div>
    )
}