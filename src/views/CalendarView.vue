<template>
  <div class="h-screen px-5 py-20 lg:flex lg:px-20">
    <div class="h-full">
      <div class="mb-5 flex flex-1 items-stretch justify-center lg:justify-start">
        <div class="text-3xl font-bold">影展場次</div>
      </div>

      <div class="flex h-full flex-col items-center lg:justify-center">
        <Splitter :gutterSize="40" layout="vertical" class="h-full w-full">
          <SplitterPanel class="flex items-center justify-center overflow-clip">
            <FullCalendar />
          </SplitterPanel>
          <SplitterPanel class="flex items-center justify-center lg:hidden">
            Panel 2
          </SplitterPanel>
        </Splitter>
      </div>
    </div>
  </div>
</template>

<script setup></script>
