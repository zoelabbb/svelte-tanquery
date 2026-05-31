<script lang="ts">
  interface Props {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }

  let { currentPage, totalPages, onPageChange } = $props<Props>()

  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
</script>

<div class="flex items-center justify-center gap-4 mt-8">
  <button
    onclick={goToPrevious}
    disabled={currentPage === 1}
    class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
  >
    ← Previous
  </button>

  <div class="flex items-center gap-2">
    <span class="text-sm text-gray-600">
      Page <span class="font-semibold">{currentPage}</span> of <span class="font-semibold">{totalPages}</span>
    </span>
  </div>

  <button
    onclick={goToNext}
    disabled={currentPage === totalPages}
    class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
  >
    Next →
  </button>
</div>
