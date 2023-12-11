"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { text } from "node:stream/consumers";
import { AlignCenter } from "lucide-react";
import { useFireproof } from "use-fireproof";
import { connect } from "@fireproof/partykit";
import { useRef, useState } from "react";

export default function Component() {
  const { database } = useFireproof("secret-santa");
  // const connection = connect.partykit(database, "dhruv");
  let [enteredname, setenteredname] = useState("");
  let docs = null;

  async function fetchdata()
  {
    docs=await database.allDocs();
  };

  fetchdata()
 

  async function namesubmitted() {
    let result = await database.put({ name: enteredname });
  }
  return (
    <div className="h-screen flex overflow-hidden bg-gray-800">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-900">
          <div className="flex-1 relative z-0 flex overflow-y-auto">
            <div className="py-6 flex flex-col justify-between w-full">
              <div className="flex-1 px-2 space-y-1">
                <h2 className="text-lg font-semibold text-white">
                  Create a Group
                </h2>
                <div className="mt-6 flex-grow flex flex-col">
                  <input
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                    placeholder="Enter Group Name"
                    type="text"
                  />
                  <Button className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-[#DC143C]">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">
              <h2 className="text-lg font-semibold text-white">
                Fireproof Secret Santa
              </h2>
              <div className="mt-6 text-center">
                <img
                  alt="Santa Claus"
                  className="mx-auto h-40 w-40"
                  height="200"
                  src="data:image/jpeg;base64,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"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="mt-6 flex-grow flex flex-col items-center">
                  <input
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white text-center"
                    placeholder="Enter Your Name"
                    type="text"
                    value={enteredname}
                    onChange={(e) => {
                      setenteredname(e.target.value);
                    }}
                  />
                  <Button
                    onClick={namesubmitted}
                    className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              
              {docs !== null && (
                <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none">
                  {console.log("These are the docs", docs)}
                  <Card>
                    <CardHeader className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-white">
                        User-1
                      </h3>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-white">
                        User-2
                      </h3>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-white">
                        User-3
                      </h3>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-white">
                        User-4
                      </h3>
                    </CardHeader>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
