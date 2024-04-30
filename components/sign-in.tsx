"use client";
import { signIn } from "@/public/assets/images";
import Image from "next/image";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField ,FormItem, FormLabel, FormControl, FormMessage} from "./ui/form";
import { Input } from "./ui/input";
import { CheckBox } from "./checkbox";
import { Button } from "./ui/button";
import { GoalIcon } from "lucide-react";
import Link from "next/link";


const formSchema = z.object({
  email: z.string().email(),
  password: z.string({
    message: "Please enter a password"
  })
})

const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })
    return(
        <div className="w-full overflow-hidden ">
            <div className="border border-black mx-12 my-9 rounded-[50px] ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="top-0 border-r">
                    <Image src={signIn} alt="sign in" width={696} height={852}/>
                </div>
                <div className=" p-16 flex justify-center items-center">
                   <div className="flex justify-center items-center">
                    <Form {...form}>
                    <form className="space-y-8">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                        />
                        <CheckBox/>
                        <Button variant="signIn" className="w-full">
                            login
                        </Button>
                        {/* //TODO:Google and facebook */}
{/*                                  
                        <Button variant="ghost" asChild className="flex flex-row space-x-3">
                             
                        </Button>
                            <Button variant="ghost" asChild>
                               
                            </Button> */}
                            <div className="flex space-x-2 ">
                            <h1>Don't have an account</h1>
                            <Link href="/signUpBuyer" className="hover:text-blue-800 hover:underline text-blue-500"> Create an Account?</Link>
                            </div>

                      
                    </form>
                    </Form>
                </div> 
                </div>
                </div>
            </div>  
        
        </div>
    )
}
export default SignIn;