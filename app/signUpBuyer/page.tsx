"use client";
import { signIn } from "@/public/assets/images";
import Image from "next/image";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField ,FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckBox } from "@/components/checkbox";
import { Button } from "@/components/ui/button";
import { DropDown } from "./components/dropdown";
import Link from "next/link";


const formSchema = z.object({
  firstName: z.string({
    message: "Enter your firstname"
  }),
  lastName: z.string({
    message: "Enter your lastname"
  }),
  email: z.string().email(),
  password: z.string({
    message: "Please enter a password"
  })
})

const SignUpBuyer = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName:"",
          lastName: "",
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
                <div className=" p-16 flex flex-col space-y-2">
                <h1 className="leading-[30px] font-500 text-[24px] text-center pb-6">Welcome to Pharmanger</h1>
                <div className="w-full h-14 grid grid-cols-2  border-b-2 gap-4">
                  <Button variant="signIn" asChild>
                      <Link href="/signUpBuyer">
                        Sign up as a drug buyer
                      </Link>
                  </Button>
                  <Button variant="signIn" asChild>
                      <Link href="/signUpPharmacy">
                        Sign up as Pharmacy
                      </Link>
                  </Button>
                </div>
                   <div className="flex justify-center items-center">
                    <Form {...form}>
                    <form className="space-y-8">
                      <div className="flex space-x-3 mt-3">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Firstname</FormLabel>
                            <FormControl>
                              <Input placeholder="first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Lastname</FormLabel>
                            <FormControl>
                              <Input placeholder="last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                        />
                      </div>
                   
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email address</FormLabel>
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
                              <Input placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                        />
                        <DropDown/>
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
                            <h1>Already have an account</h1>
                            <Link href="/" className="hover:text-blue-800 hover:underline text-blue-500"> LogIn? </Link>
                            </div>

                      
                    </form>
                    </Form>
                </div> 
                </div>
                </div>
            </div>
            <div className=" flex space-x-6">
            <Button variant="secondary" asChild>
            <Link href="/drugs">
              link to the drugs inventory
            </Link> 
            </Button>
          <Button variant="secondary" asChild>
          <Link href="/Inventory">
              link to pharmacy inventory
            </Link>
          </Button>
            </div>
           
    
        </div>
    )
}
export default SignUpBuyer;