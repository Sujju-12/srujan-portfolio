export const profile = {
  name: 'Srujan Kumar',
  role: 'DevOps Engineer',
  email: 'srujanraj12k93@gmail.com',
  phone: '+91-9391037911',
  github: 'https://github.com/Sujju-12',
  linkedin: 'https://www.linkedin.com/in/srujan-kumar',
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
    tag: 'Handshake AI',
    title: 'Training Frontier AI Models',
    description:
      'Working with Handshake AI, contributing real-world DevOps and cloud expertise to evaluate and improve how AI models reason about infrastructure problems.',
    points: [
      'Authoring expert-level DevOps prompts and scenarios',
      'Reviewing and grading model reasoning',
      'Identifying failure modes in technical answers',
      'Improving model quality on cloud and Kubernetes tasks',
    ],
  },
]

export const projects = [
  {
    title: 'AI Observability Platform',
    description:
      'A cloud-native observability platform on Kubernetes implementing all three pillars — metrics with Prometheus and Grafana, distributed tracing with OpenTelemetry and Jaeger, and centralized logs with Loki — shipped via a Jenkins and Helm pipeline.',
    stack: ['Kubernetes', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Jaeger', 'Loki', 'Helm', 'Jenkins'],
    href: 'https://github.com/Sujju-12/AI-Observability-Platform',
  },
  {
    title: 'AI Kubernetes Troubleshooting Agent',
    description:
      'An LLM-powered agent that automatically detects and performs root cause analysis on cluster issues such as OOMKilled events, crash-loop restarts and pod scheduling failures.',
    stack: ['Agentic AI', 'LLMs', 'Python', 'Kubernetes', 'EKS'],
    href: 'https://github.com/Sujju-12',
  },
  {
    title: 'Kubernetes Networking Lab',
    description:
      'Hands-on demos of ALB and NGINX Ingress controllers, API Gateway rate limiting and caching, StatefulSets and AWS developer services including CodePipeline and CodeDeploy.',
    stack: ['Ingress', 'NGINX', 'ALB', 'API Gateway', 'StatefulSet', 'CodePipeline'],
    href: 'https://github.com/Sujju-12',
  },
]
