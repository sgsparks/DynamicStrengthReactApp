class ExerciseModel {
  exerciseName: string;
  instructions: string;
  bodyPart: string;
  target: string;
  secondary: Array<string>;
  exerciseId: number;

  constructor (
    exerciseName: string,
    instructions: string,
    bodyPart: string,
    target: string,
    secondary: Array<string>,
    exerciseId: number,
  ) {
    this.exerciseName = exerciseName;
    this.instructions = instructions;
    this.bodyPart = bodyPart;
    this.target = target;
    this.secondary = secondary;
    this. exerciseId = exerciseId;
  }

}

export default ExerciseModel