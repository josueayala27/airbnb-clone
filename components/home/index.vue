<template>
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] px-6 lg:px-0 mt-6">
    <!-- Distance card -->
    <HomeCard
      v-bind="{
        availability: { start: '01/11/2022', end: '01/16/2022' },
        price: 722,
        rate: 4.5,
        meta: { distance: 192 },
        type: DescType.DISTANCE,
        title: 'San José, Costa Rica', images: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-51145625/original/6d47be0c-4c5a-411f-8d6a-7134baffbe90.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-51145625/original/8b50448e-9792-42f0-ae65-fa6cd67e68c5.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-51145625/original/2dbb59c1-3386-4d59-85a0-c110e759c419.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-51145625/original/bcc0f1bf-60ff-49ab-86ed-5f76ee7edab4.jpeg?im_w=720'
        ]
      }"
    />

    <!-- Recent card -->
    <HomeCard
      v-bind="{
        availability: { start: '03/11/2022', end: '03/17/2022' },
        price: 178,
        rate: 5.0,
        meta: { weeks: 9 },
        type: DescType.RECENT,
        title: 'Cedar City, Utah, US', images: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/c4a1d4c5-f912-492a-afe3-02cb25e0d315.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/92b1145f-801b-4a4a-b448-dc167dc5f232.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/64d725da-b287-4c39-b298-aeb7595f32b0.jpeg?im_w=720'
        ]
      }"
    />

    <!-- Popular card -->
    <HomeCard
      v-bind="{
        availability: { start: '04/07/2022', end: '04/12/2022' },
        price: 335,
        rate: 4.98,
        meta: {count: (40570).toLocaleString('en-US') },
        type: DescType.POPULAR,
        title: 'Lac-Beauport, Canada', images: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/6ba850bd-6582-45a5-bce7-5b96dc6f30dd.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/9bd67185-dc83-4473-a191-9486c62aec66.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/088a6251-1a8c-459c-9f14-6d131fdb1a68.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/d01dc3d2-9597-4d88-92f7-3e15a1c0d604.jpeg?im_w=720'
        ]
      }"
    />

    <!-- Nearby places card -->
    <HomeCard
      v-bind="{
        availability: { start: '12/22/2022', end: '12/27/2022' },
        price: 493,
        rate: 4.89,
        meta: { location: 'Playa El Palmarcito' },
        type: DescType.NEARBY_PLACES,
        title: 'La Libertad, El Salvador', images: [
          'https://a0.muscache.com/im/pictures/9835554c-a827-4daf-9c37-58a61398a285.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/97616f78-8cc9-4007-8d9c-4afb37e6d3a9.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/1bcad9ad-6e17-452a-be11-4f3e83a03b2d.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/d81d4ac7-5a64-480a-9503-9d7e2c04eb8c.jpg?im_w=720'
        ]
      }"
    />
  </section>
</template>

<script setup>
import { DescType } from '@/enums/home-card.enum'
</script>
