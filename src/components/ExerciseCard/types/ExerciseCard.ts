export interface IExercise {
  id: string;
  name: string;
  description?: string;
  muscle_groups?: string;
  equipment_required?: string;
  movement_patterns?: string;
  synonyms?: string;
  side?: string;
  is_alternating?: boolean;
  video?: IVideo;
  audio?: IAudio;
  skill?: ISkill
}

export interface ISkill {
  level : number;
  max_level : number;
}

export interface IExerciseCard {
  exercise: IExercise;
}

export interface IVideo {
  is_flipped?: boolean;
  url?: string;
}

export interface IAudio {
  url?: string;
}

export interface IStyledExerciseCard {
  selected: boolean;
}
