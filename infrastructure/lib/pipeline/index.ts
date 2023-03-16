import { pipelines, Stage } from 'aws-cdk-lib';
import { DevStage } from "./dev-stage";

export const stages = (pipeline: pipelines.CodePipeline): Stage[] => [
    new DevStage(pipeline, 'DevStage')
];
