"use client";

// import { toast } from "sonner";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      id="early-access"
    >
      <iframe
        aria-label="Early Access Registration"
        frameBorder="0"
        style={{ height: "1250px", width: "99%", border: "none" }}
        src="https://forms.zohopublic.com/jaiessa1/form/EarlyAccessMembershipProgramRegistration/formperma/RuVzmEZf_vKCi5B4cfk8-nsIFRN0AMRk44jHwgxCOAU"
      ></iframe>
    </div>
  );
}

// const formSchema = z.object({
//   name: z.string().min(2),
//   email: z.string(),
//   phone: z.string(),
//   address: z.string().optional(),
// });

// export function RegistrationForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     try {
//       console.log(values);
//       toast.info(
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       );
//     } catch (error) {
//       console.error("Form submission error", error);
//       toast.error("Failed to submit the form. Please try again.");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-8 max-w-3xl mx-auto py-10"
//       >
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Full Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="John Doe" type="text" {...field} />
//               </FormControl>
//               <FormDescription>Enter your first and last name</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="john@doe.com" type="email" {...field} />
//               </FormControl>
//               <FormDescription>Enter your email address</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem className="flex flex-col items-start">
//               <FormLabel>Phone number</FormLabel>
//               <FormControl className="w-full">
//                 <Input type="tel" placeholder="234-567-8901" {...field} />
//               </FormControl>
//               <FormDescription>Enter your phone number.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="address"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Address</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="234 Street Ave. #1A, Charlotte, NC"
//                   type="text"
//                   {...field}
//                 />
//               </FormControl>
//               <FormDescription>Enter your street address</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }
