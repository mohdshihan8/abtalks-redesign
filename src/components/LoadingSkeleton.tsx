'use client';

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-200 rounded-xl" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-24">
      {/* Header skeleton */}
      <div className="bg-[#1e3a5f] px-5 pt-6 pb-4 rounded-b-[28px] animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 bg-white/20 rounded-full" />
          <div className="flex-1">
            <div className="h-3 bg-white/20 rounded w-24 mb-2" />
            <div className="h-5 bg-white/20 rounded w-32" />
          </div>
        </div>
      </div>
      
      {/* Cards skeleton */}
      <div className="px-5 mt-5 space-y-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export function DayPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-24">
      <div className="bg-[#1e3a5f] px-5 pt-6 pb-4 rounded-b-[28px] animate-pulse">
        <div className="h-4 bg-white/20 rounded w-24 mb-4" />
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full" />
          <div className="flex-1">
            <div className="h-3 bg-white/20 rounded w-20 mb-2" />
            <div className="h-5 bg-white/20 rounded w-40" />
          </div>
        </div>
      </div>
      
      <div className="px-5 mt-5 space-y-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}