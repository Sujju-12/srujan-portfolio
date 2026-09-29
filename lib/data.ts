export const profile = {
  name: 'Srujan Kumar',
  role: 'DevOps Engineer',
  email: 'srujanraj12k93@gmail.com',
  phone: '+91-9391037911',
  github: 'https://github.com/Sujju-12',
  linkedin: 'https://www.linkedin.com/in/srujan-kumar-3666a7112',
  resume: '/srujan-kumar-resume.pdf',
}

export const stats = [
  { value: '3.6', label: 'Years in cloud & DevOps' },
  { value: '65%', label: 'Faster provisioning with Terraform' },
  { value: '45%', label: 'Lower MTTD through observability' },
  { value: '80%', label: 'Fewer production rollbacks' },
]

export const experience = [
  {
    role: 'DevOps Engineer',
    company: 'Cognizant',
    client: 'Client: Wallenius Wilhelmsen (Enterprise Logistics)',
    period: 'Oct 2021 — Aug 2024',
    highlights: [
      'Engineered declarative Jenkins CI/CD pipelines with Maven, SonarQube, Docker multi-stage builds, ECR and Kubernetes, enabling 100% automated delivery.',
      'Achieved zero-downtime releases through tuned rolling updates and blue-green deployments with a 2-minute rollback window.',
      'Provisioned VPC, EC2, IAM, ALB and S3 via Terraform modules with remote state and DynamoDB locking, cutting provisioning time by 65%.',
      'Enforced least-privilege RBAC across EKS clusters and 100% MFA compliance across production AWS accounts.',
      'Built Prometheus, Grafana and CloudWatch alerting that reduced mean time to detect by 45%.',
      'Drove monthly cost reviews in Cost Explorer, decommissioning idle resources and unused storage.',
    ],
  },
  {
    role: 'Career Development Period',
    company: 'Independent',
    client: 'AI-driven DevOps & AgentOps',
    period: 'Aug 2024 — Present',
    highlights: [
      'Took a planned career break for family health responsibilities while deepening Kubernetes, AWS and automation expertise.',
      'Built an AI-powered Kubernetes troubleshooting agent that detects OOMKilled, crash-loop and scheduling failures and performs root cause analysis.',
      'Built a cloud-native observability platform covering metrics, traces and logs with Prometheus, Grafana, OpenTelemetry, Jaeger and Loki.',
      'Completed structured, lab-validated DevOps training on KodeKloud.',
    ],
  },
  {
    role: 'Cloud Support Associate (Contract)',
    company: 'Amazon',
    client: 'AWS Support',
    period: 'May 2020 — Nov 2020',
    highlights: [
      'Delivered SLA-driven support for EC2, S3 and IAM incidents, escalating critical issues to engineering teams.',
      'Monitored distributed AWS environments and helped resolve backend service outages and access issues.',
    ],
  },
]

export const skills = [
  {
    title: 'Cloud',
    items: ['AWS EKS', 'EC2', 'S3', 'IAM', 'VPC', 'ALB', 'Lambda', 'API Gateway', 'Route 53', 'RDS', 'SNS', 'ECR'],
  },
  {
    title: 'Containers',
    items: ['Kubernetes', 'Helm', 'Docker', 'RBAC', 'HPA', 'Rolling Updates', 'Namespace Isolation'],
  },
  {
    title: 'CI/CD & GitOps',
    items: ['Jenkins', 'GitHub Actions', 'Maven', 'SonarQube', 'Gitflow', 'AWS CodePipeline'],
  },
  {
    title: 'Infrastructure as Code',
    items: ['Terraform Modules', 'Remote State', 'DynamoDB Locking', 'Ansible'],
  },
  {
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'CloudWatch', 'OpenTelemetry', 'Jaeger', 'Loki'],
  },
  {
    title: 'Security & Scripting',
    items: ['IAM Least Privilege', 'SSL/TLS', 'Network Policies', 'Bash', 'Python', 'YAML', 'Linux'],
  },
]

export const aiLearnings = [
  {
    tag: 'RAG',
    title: 'Retrieval-Augmented Generation',
    description:
      'Grounding LLM answers in real operational knowledge — runbooks, incident post-mortems and cluster documentation — so responses are accurate and traceable.',
    points: [
      'Document chunking and embedding strategies',
      'Vector search for runbooks and logs',
      'Context assembly and citation of sources',
      'Evaluating answer relevance and hallucinations',
    ],
  },
  {
    tag: 'Agentic AI',
    title: 'Agents for Infrastructure',
    description:
      'Designing tool-using agents that observe, reason and act on infrastructure — turning hours of manual cluster debugging into minutes.',
    points: [
      'Tool calling against kubectl, logs and metrics',
      'Multi-step root cause analysis loops',
      'Human-in-the-loop guardrails for safe actions',
      'AgentOps: tracing and monitoring agent behavior',
    ],
  },
  {
    tag: 'MCP',
    title: 'Model Context Protocol',
    description:
      'Connecting agents to real tools — docs, logs, tickets and clusters — through a standard, permissioned interface I use in my daily workflow.',
    points: [
      'Exposing kubectl and log queries as MCP tools',
      'Read-only by default, scoped permissions',
      'Pulling docs and issue context into the editor',
      'Auditing every tool call an agent makes',
    ],
  },
  {
    tag: 'MLOps',
    title: 'Future-ready MLOps',
    description:
      'Bringing CI/CD, containers, IaC and observability to the machine learning lifecycle — from training to serving and monitoring.',
    points: [
      'Versioning data, models and experiments',
      'Pipelines that train, evaluate and gate releases',
      'Model serving on Kubernetes with autoscaling',
      'Monitoring drift, latency and cost',
    ],
  },
]

export const handshake = {
  title: 'Training frontier AI models with Handshake AI',
  description:
    'Contributing real-world DevOps and cloud expertise to evaluate and improve how AI models reason about infrastructure problems.',
  points: [
    'Authoring expert-level DevOps prompts and scenarios',
    'Reviewing and grading model reasoning',
    'Identifying failure modes in technical answers',
    'Improving model quality on cloud and Kubernetes tasks',
  ],
}

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  stack: string[]
  github: string
  live?: string
  outcomes: string[]
  workflow: { step: string; detail: string }[]
}

export const projects: Project[] = [
  {
    slug: 'ai-troubleshoot-agent',
    title: 'AI Kubernetes Troubleshoot Agent',
    category: 'Agentic AI · AIOps',
    description:
      'An LLM-powered agent that detects failing workloads and performs root cause analysis on OOMKilled events, CrashLoopBackOff restarts and pod scheduling failures — then recommends a fix with a human in the loop.',
    stack: ['Agentic AI', 'LLMs', 'MCP', 'RAG', 'Python', 'Kubernetes', 'EKS', 'Prometheus'],
    github: 'https://github.com/Sujju-12',
    outcomes: [
      'Turns manual cluster debugging from hours into minutes',
      'Correlates pod events, logs and metrics for a single root cause',
      'Retrieves relevant runbooks with RAG to ground every answer',
      'Human approval required before any change is applied',
    ],
    workflow: [
      { step: 'Detect', detail: 'Watches for failing pods and warning events across namespaces.' },
      { step: 'Gather', detail: 'Collects pod descriptions, logs, events and resource metrics via tools.' },
      { step: 'Reason', detail: 'The LLM correlates signals with runbook context to find the root cause.' },
      { step: 'Recommend', detail: 'Proposes a fix — limits, probes, image or scheduling changes — for approval.' },
    ],
  },
  {
    slug: 'taxi-booking-platform',
    title: 'Taxi Booking Application',
    category: 'CI/CD · Kubernetes',
    description:
      'A taxi booking application taken from source to production with a fully automated pipeline — containerised, scanned, and deployed to Kubernetes with zero-downtime rolling updates.',
    stack: ['Jenkins', 'Maven', 'SonarQube', 'Docker', 'Kubernetes', 'Helm', 'Trivy', 'AWS'],
    github: 'https://github.com/Sujju-12',
    outcomes: [
      'End-to-end automated build, test, scan and deploy',
      'Quality gates with SonarQube before every release',
      'Container image scanning with Trivy',
      'Rolling updates with fast rollback on Kubernetes',
    ],
    workflow: [
      { step: 'Build', detail: 'Maven build and unit tests triggered on every commit.' },
      { step: 'Analyse', detail: 'SonarQube static analysis enforces code quality gates.' },
      { step: 'Containerise', detail: 'Multi-stage Docker build, scanned with Trivy and pushed to a registry.' },
      { step: 'Deploy', detail: 'Helm deploys to Kubernetes with rolling updates and health probes.' },
    ],
  },
  {
    slug: 'scalable-game-deployment',
    title: 'Scalable Game Deployment',
    category: 'DevSecOps · Scalability',
    description:
      'A web game containerised with Docker, published to Docker Hub, orchestrated on Kubernetes and deployed on Vercel — load balanced with NGINX, stress-tested for scalability, secured with Trivy and SAST, and monitored with Prometheus, Grafana and Loki.',
    stack: ['Docker', 'Docker Hub', 'Kubernetes', 'Vercel', 'NGINX', 'Trivy', 'SAST', 'Prometheus', 'Grafana', 'Loki'],
    github: 'https://github.com/Sujju-12',
    outcomes: [
      'Horizontally scaled replicas behind an NGINX load balancer',
      'Load-tested to validate scalability and autoscaling behaviour',
      'Shift-left security with SAST and Trivy image scanning',
      'Full visibility with metrics, dashboards and centralised logs',
    ],
    workflow: [
      { step: 'Containerise', detail: 'Dockerised the game and pushed versioned images to Docker Hub.' },
      { step: 'Secure', detail: 'SAST on source code and Trivy scans on images before release.' },
      { step: 'Orchestrate', detail: 'Kubernetes Deployments with replicas behind an NGINX load balancer; deployed on Vercel.' },
      { step: 'Test & Observe', detail: 'Load tests validated scaling while Prometheus, Grafana and Loki tracked health.' },
    ],
  },
  {
    slug: 'observability-stack',
    title: 'Cloud-Native Observability Stack',
    category: 'Observability · SRE',
    description:
      'A complete observability platform on Kubernetes covering all three pillars — metrics with Prometheus and Grafana, centralised logs with Loki, and distributed tracing with OpenTelemetry and Jaeger.',
    stack: ['Kubernetes', 'Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'Jaeger', 'Helm', 'Jenkins'],
    github: 'https://github.com/Sujju-12/AI-Observability-Platform',
    outcomes: [
      'Unified metrics, logs and traces in Grafana',
      'Alerting rules that cut mean time to detect',
      'Helm-based, repeatable installation',
      'Shipped through a Jenkins pipeline',
    ],
    workflow: [
      { step: 'Metrics', detail: 'Prometheus scrapes cluster and app metrics with alerting rules.' },
      { step: 'Logs', detail: 'Promtail ships container logs to Loki for fast querying.' },
      { step: 'Traces', detail: 'OpenTelemetry instruments services and exports traces to Jaeger.' },
      { step: 'Visualise', detail: 'Grafana dashboards correlate all three pillars in one view.' },
    ],
  },
  {
    slug: 'kubernetes-networking-lab',
    title: 'Kubernetes Networking Lab',
    category: 'Networking · AWS',
    description:
      'Hands-on demos of ALB and NGINX Ingress controllers, API Gateway rate limiting and caching, StatefulSets and AWS developer services including CodePipeline and CodeDeploy.',
    stack: ['Ingress', 'NGINX', 'ALB', 'API Gateway', 'StatefulSet', 'CodePipeline'],
    github: 'https://github.com/Sujju-12',
    outcomes: [
      'Compared ALB and NGINX Ingress routing patterns',
      'Rate limiting and caching with API Gateway',
      'Stateful workloads with StatefulSets',
      'AWS-native CI/CD with CodePipeline and CodeDeploy',
    ],
    workflow: [
      { step: 'Ingress', detail: 'Path and host-based routing with ALB and NGINX controllers.' },
      { step: 'Gateway', detail: 'API Gateway throttling and response caching.' },
      { step: 'State', detail: 'StatefulSets with persistent volumes.' },
      { step: 'Deliver', detail: 'CodePipeline and CodeDeploy for automated releases.' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
