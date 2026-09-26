export type Service = { number: string; title: string; summary: string; capabilities: string[]; diagram: string };

export const services: Service[] = [
  { number: '01', title: 'Cloud & Infrastructure', summary: 'Design the foundations your applications actually need, from cloud architecture to resilient network and compute services.', capabilities: ['AWS & Azure', 'Infrastructure architecture', 'High availability', 'Linux & virtualization', 'Network integration'], diagram: 'cloud' },
  { number: '02', title: 'Kubernetes & Platforms', summary: 'Bring clear operating patterns to container platforms and the services they depend on.', capabilities: ['EKS & RKE2', 'Platform architecture', 'Operations', 'Upgrades', 'Knowledge transfer'], diagram: 'kubernetes' },
  { number: '03', title: 'Application Delivery', summary: 'Make application access, traffic flow and security work together reliably for users and operators.', capabilities: ['F5 BIG-IP', 'Load balancing', 'Identity federation', 'Web application security', 'Traffic routing'], diagram: 'platform' },
  { number: '04', title: 'Automation & Validation', summary: 'Turn deployment and testing into repeatable practices that teams can trust.', capabilities: ['Terraform', 'Infrastructure as code', 'Performance baselines', 'Deployment standards', 'Operational documentation'], diagram: 'automation' },
  { number: '05', title: 'Performance & Reliability', summary: 'Find the cause behind hard problems across applications, servers, networks and cloud environments.', capabilities: ['Complex troubleshooting', 'Monitoring', 'Capacity planning', 'Incident analysis', 'Recovery readiness'], diagram: 'observability' },
];

export const problems = [
  { problem: 'The application is slow, but every team sees a different cause.', solution: 'Trace performance across the application, infrastructure and network, then establish baselines that make the real bottleneck visible.' },
  { problem: 'A critical deployment has too many unknowns.', solution: 'Define architecture, test criteria and a validation plan before the change reaches production.' },
  { problem: 'Traffic and access rules are becoming impossible to manage.', solution: 'Simplify load balancing, routing and identity patterns so they are easier to secure and operate.' },
  { problem: 'Our infrastructure depends on tribal knowledge.', solution: 'Turn undocumented decisions into clear standards, runbooks and shared ownership.' },
  { problem: 'We find out something is wrong when users call.', solution: 'Improve monitoring and operational context so teams can detect, diagnose and respond earlier.' },
];

export const approach = [
  { title: 'Understand', text: 'Learn the workload, users, dependencies and current pain points.' },
  { title: 'Architect', text: 'Set a practical design that fits the environment and its constraints.' },
  { title: 'Implement', text: 'Build clear, repeatable patterns with the people who will run them.' },
  { title: 'Validate', text: 'Test performance, availability and operational behavior against a baseline.' },
  { title: 'Transfer Knowledge', text: 'Document decisions and equip your team to operate with confidence.' },
];
