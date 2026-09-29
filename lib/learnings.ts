export type LearningSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type Learning = {
  slug: string
  title: string
  tag: 'MCP' | 'RAG' | 'Agentic AI' | 'MLOps'
  date: string
  readTime: string
  excerpt: string
  sections: LearningSection[]
}

// To publish a new learning, add an object to the top of this array.
export const learnings: Learning[] = [
  {
    slug: 'mcp-giving-agents-real-tools',
    title: 'MCP: giving AI agents real tools, safely',
    tag: 'MCP',
    date: '2026-09-20',
    readTime: '5 min read',
    excerpt:
      'How the Model Context Protocol standardises the way agents talk to kubectl, logs, tickets and docs — and how I use it every day.',
    sections: [
      {
        heading: 'What MCP is',
        paragraphs: [
          'The Model Context Protocol (MCP) is an open standard that lets an AI model connect to external tools and data sources through a common interface. Instead of writing a custom integration for every LLM and every tool, you expose a tool once as an MCP server and any MCP-compatible client can use it.',
          'For a DevOps engineer, this is the missing piece between a chatbot and an operator: the model can read cluster state, query metrics and open tickets through well-defined, permissioned tools.',
        ],
      },
      {
        heading: 'How I apply it day to day',
        paragraphs: ['I use MCP servers in my workflow to reduce context switching:'],
        bullets: [
          'Reading documentation and notes directly from my knowledge base while debugging',
          'Exposing read-only kubectl and log queries as tools for my troubleshooting agent',
          'Pulling issue context into the editor before writing a fix',
        ],
      },
      {
        heading: 'Guardrails I follow',
        paragraphs: [
          'Treat every MCP tool like a production credential. Start read-only, scope permissions to a namespace, log every tool call, and require human approval for anything that mutates infrastructure.',
        ],
      },
    ],
  },
  {
    slug: 'rag-for-runbooks-and-incidents',
    title: 'RAG for runbooks and incident knowledge',
    tag: 'RAG',
    date: '2026-09-05',
    readTime: '6 min read',
    excerpt:
      'Grounding LLM answers in real operational knowledge so an on-call engineer gets accurate, cited answers instead of hallucinations.',
    sections: [
      {
        heading: 'Why RAG matters for operations',
        paragraphs: [
          'LLMs do not know your cluster, your runbooks or last month\u2019s post-mortem. Retrieval-Augmented Generation fixes this by fetching the most relevant internal documents at query time and passing them to the model as context.',
        ],
      },
      {
        heading: 'The pipeline',
        paragraphs: ['A practical RAG pipeline has four stages:'],
        bullets: [
          'Ingest: collect runbooks, READMEs, post-mortems and alert descriptions',
          'Chunk and embed: split documents into meaningful sections and generate embeddings',
          'Retrieve: run vector (and keyword) search to find the top-k relevant chunks',
          'Generate: assemble context, answer the question and cite the source documents',
        ],
      },
      {
        heading: 'Lessons learned',
        paragraphs: [
          'Chunking by heading beats fixed-size chunks for runbooks. Hybrid search (vector + keyword) handles error codes and pod names far better than vectors alone. And always evaluate: keep a small set of real questions with known answers and measure relevance after every change.',
        ],
      },
    ],
  },
  {
    slug: 'building-ai-agents-for-kubernetes',
    title: 'Building AI agents that debug Kubernetes',
    tag: 'Agentic AI',
    date: '2026-08-22',
    readTime: '7 min read',
    excerpt:
      'Designing a tool-using agent that observes, reasons and suggests fixes for OOMKilled, CrashLoopBackOff and scheduling failures.',
    sections: [
      {
        heading: 'From chatbot to agent',
        paragraphs: [
          'A chatbot answers questions. An agent works in a loop: it observes the environment through tools, reasons about what it sees, takes the next action, and repeats until it reaches a conclusion.',
        ],
      },
      {
        heading: 'The agent loop I built',
        paragraphs: ['My Kubernetes troubleshooting agent follows a clear loop:'],
        bullets: [
          'Detect: watch for failing pods and warning events',
          'Gather: describe the pod, fetch logs, events and resource metrics',
          'Reason: correlate signals to identify the root cause',
          'Recommend: propose a fix, such as raising memory limits or fixing a probe',
          'Approve: a human confirms before any change is applied',
        ],
      },
      {
        heading: 'AgentOps',
        paragraphs: [
          'Agents need observability too. I trace every tool call and model step so I can see why the agent reached a conclusion, how long it took and what it cost.',
        ],
      },
    ],
  },
  {
    slug: 'mlops-the-devops-of-machine-learning',
    title: 'MLOps: the future-ready path for DevOps engineers',
    tag: 'MLOps',
    date: '2026-08-10',
    readTime: '5 min read',
    excerpt:
      'Applying CI/CD, containers, IaC and observability to the machine learning lifecycle — from training to model serving and monitoring.',
    sections: [
      {
        heading: 'Why MLOps',
        paragraphs: [
          'Models are only valuable in production. MLOps brings the same discipline DevOps brought to software — automation, versioning, reproducibility and monitoring — to data and models.',
        ],
      },
      {
        heading: 'What I am focusing on',
        paragraphs: ['My learning roadmap maps directly onto skills I already use:'],
        bullets: [
          'Versioning data, models and experiments alongside code',
          'CI/CD pipelines that train, evaluate and gate model releases',
          'Serving models on Kubernetes with autoscaling',
          'Monitoring drift, latency and cost with Prometheus and Grafana',
        ],
      },
    ],
  },
]

export function getLearning(slug: string) {
  return learnings.find((learning) => learning.slug === slug)
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
