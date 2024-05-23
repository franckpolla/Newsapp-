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

const PostitemOne = ({ item, fulldisplay }: any) => {
  return (
    <div className="p-2 overflow-hidden">
      <Card className="max-w-[18rem] w-full   overflow-hidden">
        <CardHeader>
          <Image
            src={`${item.Img}`}
            alt="ui/ux review check"
            width={300}
            height={300}
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-blue-gray">{item.title}</h3>
          {fulldisplay && (
            <p className="mt-3 text-gray-400 font-normal">{item.brief}</p>
          )}
        </CardContent>
        
          <CardFooter className="flex items-center justify-between">
            <div className="flex flex-col space-y-3">
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

export default PostitemOne;
