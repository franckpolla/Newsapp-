
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Person1 } from "@/data/data";


const eachPost = ({item}:any) => {
  return (
    <div className="p-6">
    <Card className="max-w-[18rem] overflow-hidden">
   <CardHeader>
     <Image
       src={Person1}
       alt="ui/ux review check"
       width={300}
       height={100}
     />
   </CardHeader>
   <CardContent>
     <h3 className="text-blue-gray">{item.title}</h3>
     <p className="mt-3 text-gray-400 font-normal">
       {item.brief}
     </p>
   </CardContent>
   <CardFooter className="flex items-center justify-between">
     <div className="flex  flex-col justify-between-space-x-3">
       <Avatar>
         <AvatarImage src={Person1} alt="@shadcn" />
         <AvatarFallback>CN</AvatarFallback>
       </Avatar>

       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger className="mt-10">24/7 News</TooltipTrigger>
           <TooltipContent>
             <strong className="text-green-400 text-xl">N</strong>ews
           </TooltipContent>
         </Tooltip>
       </TooltipProvider>
     </div>
     <h3 className="font-normal">{item.author}</h3>
   </CardFooter>
 </Card>
  </div>
);
};

export default eachPost











