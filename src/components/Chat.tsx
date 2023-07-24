'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useChat } from 'ai/react';
import { ScrollArea } from '@/components/ui/scroll-area';


export function Chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    })

    return (
        <Card className='w-[440px]'>
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className='h-[600px] w-full pr-4'>
                    {messages.map(message => {
                        return(
                            <div key={message.id} className='flex gap-3 text-slate-600 text-sm mb-4'>
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>LS</AvatarFallback>
                                        <AvatarImage src='https://avatars.githubusercontent.com/u/82174287?s=96&v=4'/>
                                    </Avatar>
                                )}

                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>AI</AvatarFallback>
                                        <AvatarImage src='https://static.vecteezy.com/system/resources/thumbnails/000/429/906/small/Unique_Artificial_Intelligence_1.jpg'/>
                                    </Avatar>
                                )}

                                <p className='leading-relaxed'>
                                    <span className='block font-bold text-slate-700'>{message.role === 'user' ? 'Usuário' : 'AI'}</span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>

            </CardContent>
            <CardFooter>
                <form  className='w-full flex gap-2' onSubmit={handleSubmit}>
                    <Input placeholder='How can I help you ?' value={input} onChange={handleInputChange}/>
                    <Button type='submit'>Send</Button>
                </form>
            </CardFooter>
      </Card>
    )
}