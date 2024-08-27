# NextJS Image Uploader

## Overview

This is a modern web application built with Next.js that allows users to sign in and upload images. It features robust authentication, analytics, and rate limiting to ensure a secure and efficient user experience.

## Features

- **User Authentication**: Secure sign-in functionality using Clerk
- **Image Upload**: Authenticated users can upload and delete their images
- **Storing Images**: Authenticated users can store their uploaded images on uploadthing
- **Site Analytics**: Integrated PostHog for tracking user behavior and application usage
- **Rate Limiting**: Implemented using Upstash to prevent abuse and ensure fair usage

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database ORM**: [Drizzle](https://orm.drizzle.team/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Rate Limiting**: [Upstash](https://upstash.com/)

## Prerequisites

- Node.js (version 14 or later)
- pnpm
- A Clerk account for authentication
- A PostHog account for analytics
- An Upstash account for rate limiting

## Login Page
![Login Page](https://github.com/user-attachments/assets/ea0dfb2d-9bf4-4077-8ac9-8bcc45aebe2f)

## User Page (I have already uploaded some images)
![Images Uploaded](https://github.com/user-attachments/assets/94d4e326-1745-460e-a77f-f5318d453070)

## Single Image Page
![image](https://github.com/user-attachments/assets/da18efb2-6333-4d6d-ab3d-3c75da879ed5)


