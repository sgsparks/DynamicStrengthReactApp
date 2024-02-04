import { useEffect, useState } from "react";
import {Spinner} from "@nextui-org/react";
import ExerciseModel from "../models/ExerciseModel";

export const Home = ()=> {
  const [exercises, setExercises] = useState<ExerciseModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);


  useEffect(() => {
    const fetchBooks = async () => {
        const baseUrl: string = "http://localhost:8080/api/v1/exercises";

        const url: string = `${baseUrl}?page=0&size=9`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const responseJson = await response.json();

        const responseData = responseJson._embedded.books;

        const loadeExercises: ExerciseModel[] = [];

        for (const key in responseData) {
          loadeExercises.push({
                exerciseName: responseData[key].id,
                exerciseId: responseData[key].title,
                instructions: responseData[key].author,
                bodyPart: responseData[key].description,
                target: responseData[key].copies,
                secondary: responseData[key].copiesAvailable,
            });
        }

        setExercises(loadeExercises);
        setIsLoading(false);
        console.log(exercises)
    };
    fetchBooks().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
    })
}, []);

if (isLoading) {
  return (
      <Spinner/>
  )
}

if (httpError) {
  return (
      <div className='container m-5'>
          <p>{httpError}</p>
      </div>
  )
}

  return (
    <div>
        HI
    </div>
  )
}