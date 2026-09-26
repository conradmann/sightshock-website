export type CaseStudy = { number: string; title: string; challenge: string; approach: string; technologies: string[]; outcome: string };

export const caseStudies: CaseStudy[] = [
  { number: '01', title: 'Enterprise Cloud Platform Modernization', challenge: 'An aging cloud foundation made change difficult to manage.', approach: 'Revisit architecture, networking and delivery workflows with operational clarity as a priority.', technologies: ['AWS', 'Terraform', 'Networking'], outcome: 'Outcome details available after project review.' },
  { number: '02', title: 'Kubernetes Platform Modernization', challenge: 'Cluster operations had become hard to understand and maintain.', approach: 'Simplify platform patterns and establish a repeatable path for upgrades and deployment.', technologies: ['Kubernetes', 'EKS / RKE2', 'GitOps'], outcome: 'Outcome details available after project review.' },
  { number: '03', title: 'High Availability Infrastructure Design', challenge: 'Critical infrastructure needed a clearer resilience strategy.', approach: 'Design for failure, improve visibility and document recovery procedures.', technologies: ['Linux', 'Observability', 'Automation'], outcome: 'Outcome details available after project review.' },
];
