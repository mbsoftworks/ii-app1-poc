import { pipelines, Stage } from 'aws-cdk-lib';
import { DevStage } from "./dev-stage";

export const addDeployments = (pipeline: pipelines.CodePipeline) => {
    pipeline.addStage(new DevStage(pipeline, 'Stockholm', { env: { account: '682282777957', region: 'eu-north-1' } }));

    const wave1 = pipeline.addWave('Multi-Region');
    wave1.addStage(new DevStage(pipeline, 'Frankfurt', { env: { account: '682282777957', region: 'eu-central-1' } }));
    wave1.addStage(new DevStage(pipeline, 'Dublin', { env: { account: '682282777957', region: 'eu-west-1' } }));

    pipeline.addStage(new DevStage(pipeline, 'Stockholm-2', { env: { account: '682282777957', region: 'eu-north-1' } }));

    const wave2 = pipeline.addWave('Multi-Region-2');
    wave2.addStage(new DevStage(pipeline, 'Frankfurt-2', { env: { account: '682282777957', region: 'eu-central-1' } }));
    wave2.addStage(new DevStage(pipeline, 'Dublin-2', { env: { account: '682282777957', region: 'eu-west-1' } }));
    wave2.addStage(new DevStage(pipeline, 'Stockholm-3', { env: { account: '682282777957', region: 'eu-north-1' } }));
}
