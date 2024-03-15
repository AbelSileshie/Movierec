import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import React from "react";
import './MovieDetail.css'

export function MovieDetail() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="relative">
      <Card
        shadow={false}
        className="relative grid h-[35rem] w-full max-w items-end justify-center overflow-hidden text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
          style={{
            filter: isHovered ? "brightness(70%)" : "brightness(100%)",
            transition: "filter 0.3s ease",
          }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        {isHovered && (
          <CardBody className="absolute top-0 right-0 py-14 px-6 md:px-12 text-right"> {/* Adjust this line */}
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5] animate-slideIn" // Apply the animation class here
            >
              Movie Title 
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400 animate-slideIn"> {/* Apply the animation class here */}
              movie details...
            </Typography>
          </CardBody>
        )}
        <div className="space-x- mt-4">
          <button className="btn">
            {}
          </button>
        </div>
      </Card>
      {/* Promotion Card */}
      <div className="absolute bottom-0 left-0 p-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <Typography variant="subtitle1" className="text-gray-600">
            Special Promotion!
          </Typography>
          <Typography variant="subtitle2" className="text-gray-600">
            Get 20% off on selected movies
          </Typography>
        </div>
      </div>
    </div>
  );
}
