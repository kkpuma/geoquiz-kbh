export interface Category {
    name: string;
    id: string;
    icon: string;
}

export interface Loading {
    category: string;
    questionNum: number;
    featureCount: number;
}

export interface createScore {
  quiz_name: string;
  user: string;
  score: number;
}

export interface Score extends createScore {
    id: string;
    create_at: Date;
    properties: any;
}
