export type Service = { number: string; title: string; summary: string; capabilities: string[]; diagram: string };

export const services: Service[] = [
  { number: '01', title: 'Cloud Infrastructure', summary: 'Cloud foundations designed for resilience, clarity and growth.', capabilities: ['AWS architecture', 'Cloud modernization', 'High availability', 'Networking', 'Infrastructure design'], diagram: 'cloud' },
  { number: '02', title: 'Kubernetes', summary: 'Clusters your team can operate with confidence.', capabilities: ['EKS', 'RKE2', 'Cluster architecture', 'Reliability', 'Upgrades & operations'], diagram: 'kubernetes' },
  { number: '03', title: 'Platform Engineering', summary: 'A better path from change to production.', capabilities: ['GitOps', 'Flux', 'CI/CD', 'Infrastructure as code', 'Developer platforms'], diagram: 'platform' },
  { number: '04', title: 'Automation', summary: 'Replace fragile handoffs with repeatable systems.', capabilities: ['Terraform', 'Ansible', 'GitOps automation', 'Operational automation', 'Repeatable deployments'], diagram: 'automation' },
  { number: '05', title: 'Observability', summary: 'Make system behavior visible before it becomes a problem.', capabilities: ['Monitoring', 'Metrics', 'Logs', 'Tracing', 'Operational visibility'], diagram: 'observability' },
];

export const problems = [
  { problem: "Our deployments aren't repeatable.", solution: 'Codify infrastructure and delivery workflows so every change follows a known path.' },
  { problem: 'Our Kubernetes platform has become too complicated.', solution: 'Simplify cluster architecture, operations and upgrades around what your team can sustain.' },
  { problem: "We don't know what's happening until something breaks.", solution: 'Build useful telemetry and alerting around the signals that actually matter.' },
  { problem: 'Our infrastructure depends on tribal knowledge.', solution: 'Turn undocumented decisions into clear systems, runbooks and shared ownership.' },
  { problem: 'Our environment works, but nobody wants to touch it.', solution: 'Reduce operational risk with deliberate modernization and validation.' },
];

export const approach = [
  { title: 'Understand', text: 'Map the system, constraints and operational reality.' },
  { title: 'Architect', text: 'Design a clear path with reliability in mind.' },
  { title: 'Automate', text: 'Make the important work repeatable.' },
  { title: 'Validate', text: 'Test behavior, failure modes and handoffs.' },
  { title: 'Transfer Knowledge', text: 'Leave teams equipped to own what comes next.' },
];
