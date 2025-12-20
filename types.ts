
export interface UseCase {
  id: number;
  title: string;
  problem: string;
  solution: string;
  components: string[];
  outcomes: string[];
  icon: string;
}

export interface EcosystemLink {
  name: string;
  url: string;
  category: 'core' | 'github' | 'dapp';
}

export enum DeploymentModel {
  PILOT = 'Pilot Deployment',
  NATIONAL = 'National Rollout',
  HYBRID = 'Hybrid Model'
}
