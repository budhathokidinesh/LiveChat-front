import Login from "@/components/authentication/Login";
import Register from "@/components/authentication/Register";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("register");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-3 shadow-md bg-blue-200 items-center justify-center text-center rounded-2xl">
        <span className="text-5xl font-bold font-sans">Live Chat</span>
        <Separator />
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mt-4"
        >
          <TabsList className="w-full mb-2 ">
            <TabsTrigger value="account" className="hover:cursor-pointer">
              Login
            </TabsTrigger>
            <TabsTrigger value="password" className="hover:cursor-pointer">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Login />
          </TabsContent>
          <TabsContent value="password">
            <Register setActiveTab={setActiveTab} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
