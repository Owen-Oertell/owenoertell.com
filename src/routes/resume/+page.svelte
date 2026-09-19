<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Owen Oertell – Resume"
  description="Research scientist at Databricks Mosaic Research, working on agents, reinforcement learning, and retrieval."
/>

<div class="layout-md space-y-14">
  <section aria-label="Overview" class="space-y-4">
    <p class="text-lg">
      I work on agents, reinforcement learning, and retrieval at
      <a class="link" href="https://www.databricks.com/"
        >Databricks Mosaic Research</a
      >.
    </p>
    <p class="text-neutral-500">
      My <a class="link" href="/#publications">publications</a> are listed on the
      homepage.
    </p>
  </section>

  <section aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="heading2">Experience</h2>
    <div class="space-y-7">
      <Workplace
        title="Research Scientist"
        company="Databricks Mosaic Research"
        url="https://www.databricks.com/"
        dates="Aug 2025 – Present"
        location="New York, NY"
      >
        Reinforcement learning for deep-research and knowledge agents.
      </Workplace>

      <Workplace
        title="Research Intern"
        company="NVIDIA"
        url="https://www.nvidia.com/"
        dates="Aug – Dec 2024; Jun – Aug 2025"
        location="Santa Clara, CA"
      >
        Reinforcement learning and optimization for GPU compilers.
      </Workplace>

      <Workplace
        title="Software Engineering Intern"
        company="DRW"
        url="https://www.drw.com/"
        dates="Jun – Aug 2024"
        location="Chicago, IL"
      >
        Commodities desk.
      </Workplace>
    </div>
  </section>

  <section aria-labelledby="education-heading">
    <h2 id="education-heading" class="heading2">Education</h2>
    <div class="entry-heading">
      <h3 class="text-black font-medium">Cornell University</h3>
      <p class="entry-date">Aug 2022 – May 2026</p>
    </div>
    <p class="mt-1">B.S. in Computer Science, <em>summa cum laude</em>.</p>
    <p class="mt-3">
      2026
      <a
        class="link"
        href="https://bowers.cornell.edu/news-stories/you-are-holding-pen-1300-bowers-graduates-honored-recognition-ceremonies"
        >Cornell Computer Science Prize for Academic Excellence</a
      >, awarded to one graduating CS major.
    </p>
    <div class="mt-6">
      <h3 class="text-black font-medium mb-2">Teaching</h3>
      <dl class="teaching-list">
        <div>
          <dt>CS 4789</dt>
          <dd>
            Reinforcement Learning
            <span class="detail-note">Spring 2024; Spring 2025 (Head TA)</span>
          </dd>
        </div>
        <div>
          <dt>CS 4820</dt>
          <dd>
            Analysis of Algorithms
            <span class="detail-note">Spring 2023; Fall 2023</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>

  <section aria-labelledby="service-heading">
    <h2 id="service-heading" class="heading2">Service</h2>
    <p class="text-sm leading-relaxed">
      Reviewer for ICLR (2025, 2026; Notable Reviewer, 2025), NeurIPS (2025),
      RLC (2025), COLM (2025), and ACL ARR (2025).
    </p>
  </section>

  <section aria-label="Contact" class="flex flex-col">
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
      <a
        class="link"
        href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en"
        >owen-oertell</a
      >
    </div>
  </section>
</div>

<style lang="postcss">
  .entry-heading {
    @apply flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4;
  }

  .entry-date {
    @apply text-sm text-neutral-500;
  }

  .teaching-list {
    @apply space-y-1 text-sm leading-relaxed;
  }

  .teaching-list > div {
    @apply grid grid-cols-[4rem_1fr] gap-x-3;
  }

  .teaching-list dt {
    @apply text-black font-medium;
  }

  .teaching-list dd {
    @apply flex flex-wrap gap-x-3;
  }

  .detail-note {
    @apply text-neutral-500;
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
