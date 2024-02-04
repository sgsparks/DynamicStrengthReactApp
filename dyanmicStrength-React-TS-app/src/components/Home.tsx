import { useEffect, useState } from "react";
import {Spinner} from "@nextui-org/react";
import ExerciseModel from "../models/ExerciseModel";

export const Home = ()=> {
  const [exercises, setExercises] = useState<ExerciseModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);


  useEffect(() => {
    const fetchExercises = async () => {
        const baseUrl: string = "http://localhost:8080/api/v1/exercises";

        const url: string = `${baseUrl}?page=0&size=9`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const responseJson = await response.json();


        const loadeExercises: ExerciseModel[] = [];

        for (const key in responseJson) {
          loadeExercises.push({
                exerciseName: responseJson[key].exerciseName,
                exerciseId: responseJson[key].exerciseId,
                instructions: responseJson[key].instructions,
                bodyPart: responseJson[key].bodyPart,
                target: responseJson[key].target,
                secondary: responseJson[key].secondary,
            });
        }

        setExercises(loadeExercises);
        setIsLoading(false);
        console.log(exercises)
    };
    fetchExercises().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
    })

    console.log(exercises)
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