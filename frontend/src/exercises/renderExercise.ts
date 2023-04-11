import type { Exercise } from '../grpc/exercise_pb'

export const renderExercise = (exercise: Exercise): string =>
  `<tr>
<td>${exercise.getId()}</td>
<td>${exercise.getName()}</td>
<td>${exercise.getDescription()}</td>
<td>${exercise.getVideoUrl()}</td>
   </tr>`
