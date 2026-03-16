<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Owen Oertell – Resume"
  description="Researcher, software engineer."
/>

<div class="layout-md py-8 space-y-12">

  <!-- Education -->
  <section>
    <h2 class="section-heading">Education</h2>

    <div class="entry py-4 border-b border-neutral-100">
      <div class="flex justify-between items-start gap-4 flex-wrap">
        <div>
          <div class="text-black font-semibold text-base">Cornell University</div>
          <div class="text-neutral-500 text-sm mt-0.5">B.S. in Computer Science &mdash; Minor in Mathematics</div>
        </div>
        <div class="text-neutral-500 text-sm whitespace-nowrap">2022 &mdash; Present</div>
      </div>
    </div>

    <div class="sub-section">
      <h3 class="sub-heading">Teaching</h3>
      <ul class="item-list">
        <li>
          <span class="item-label">CS 4789</span>
          Introduction to Reinforcement Learning
          <span class="item-tags">
            <span class="tag">Sp24</span>
            <span class="tag">Sp25 Head TA</span>
          </span>
        </li>
        <li>
          <span class="item-label">CS 4820</span>
          Introduction to Analysis of Algorithms
          <span class="item-tags">
            <span class="tag">Fa23</span>
            <span class="tag">Sp23</span>
          </span>
        </li>
      </ul>
    </div>

    <div class="sub-section">
      <h3 class="sub-heading">Service</h3>
      <ul class="item-list">
        <li>
          <span class="item-label">ICLR</span>
          Reviewer 2025, 2026
          <span class="item-tags"><span class="tag">Notable Reviewer 2025</span></span>
        </li>
        <li><span class="item-label">NeurIPS</span> Reviewer 2025</li>
        <li><span class="item-label">RLC</span> Reviewer 2025</li>
        <li><span class="item-label">COLM</span> Reviewer 2025</li>
        <li><span class="item-label">ACL ARR</span> Reviewer 2025</li>
      </ul>
    </div>
  </section>

  <!-- Experience -->
  <section>
    <h2 class="section-heading">Experience</h2>

    <Workplace
      title="Research Scientist Intern"
      company="Databricks"
      url="https://databricks.com"
      dates="Aug 2025 – Present"
      location="New York, NY"
    >
      <li>Deep Research Agents</li>
    </Workplace>

    <Workplace
      title="Research Intern"
      company="NVIDIA"
      url="https://nvidia.com"
      dates="Jun 2025 – Aug 2025"
      location="Santa Clara, CA"
    >
      <li>RL + Compilers</li>
    </Workplace>

    <Workplace
      title="Research Intern"
      company="NVIDIA"
      url="https://nvidia.com"
      dates="Aug 2024 – Dec 2024"
      location="Santa Clara, CA"
    >
      <li>ML + Compilers</li>
    </Workplace>

    <Workplace
      title="Software Engineering Intern"
      company="DRW Holdings"
      url="https://drw.com"
      dates="Jun 2024 – Aug 2024"
      location="Chicago, IL"
    >
      <li>Commodities desk</li>
    </Workplace>

    <Workplace
      title="Researcher"
      company="Sun Lab, Cornell University"
      url="https://wensun.github.io"
      dates="Sep 2022 – Present"
      location="Ithaca, NY"
    >
      <li>Reinforcement learning</li>
    </Workplace>
  </section>

  <!-- Contact -->
  <section>
    <div class="contact-rows flex flex-col">
      <div class="row">
        <span>email</span>
        <hr />
        <a class="link" href="mailto:ojo2@cornell.edu">ojo2@cornell.edu</a>
      </div>
      <div class="row">
        <span>github</span>
        <hr />
        <a class="link" href="https://github.com/owen-oertell">@owen-oertell</a>
      </div>
      <div class="row">
        <span>scholar</span>
        <hr />
        <a class="link" href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en">owen-oertell</a>
      </div>
    </div>
  </section>

</div>

<style lang="postcss">
  .section-heading {
    @apply text-black text-xl font-semibold mb-1 pb-2 border-b border-neutral-200;
  }

  .sub-section {
    @apply mt-4;
  }

  .sub-heading {
    @apply text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2;
  }

  .item-list li + li {
    @apply mt-2;
  }

  .item-list li {
    @apply text-sm text-neutral-600 flex items-baseline gap-2 flex-wrap;
  }

  :global(.dark) .item-list li {
    color: rgb(160, 160, 160);
  }

  .item-label {
    @apply font-medium text-neutral-800 text-sm whitespace-nowrap flex-shrink-0;
    min-width: 4.5rem;
  }

  :global(.dark) .item-label {
    color: rgb(220, 220, 220);
  }

  .item-tags {
    @apply flex gap-1 flex-wrap;
  }

  .tag {
    @apply text-xs px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500;
  }

  :global(.dark) .tag {
    background-color: rgb(38, 38, 38);
    color: rgb(150, 150, 150);
  }

  .tag.highlight {
    background-color: rgb(239, 246, 255);
    color: rgb(59, 130, 246);
  }

  :global(.dark) .tag.highlight {
    background-color: rgb(23, 37, 84);
    color: rgb(147, 197, 253);
  }

  .row {
    @apply flex items-center space-x-4;
  }

  .row a {
    @apply text-neutral-500 min-w-fit;
  }

  .row hr {
    @apply w-full mt-0.5 border-neutral-300 border-dotted;
  }
</style>
