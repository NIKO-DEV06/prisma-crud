import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Prisma Queries
  // CREATE USER
  //   const user = await prisma.user.create({
  //     data: {
  //       name: 'Niko Doe',
  //       email: 'niko@gmail.com',
  //     },
  //   });
  //   -----------------------
  //   GETR ALL USER
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // });
  //   -----------------------
  // CREATE USER AND ASSOCIATE IT WITH USER
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Johns !st Aricle',
  //     body: 'This is johns first article',
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });
  //   -----------------------
  // GET ALL ARTICLES
  // const articles = await prisma.article.findMany();
  // console.log(articles);
  //   -----------------------
  // CREATE USER & ARTICLE & ASSOCIATE THEM
  // const user = await prisma.user.create({
  //   data: {
  //     name: ' Jane Smith',
  //     email: 'jane@gmail.com',
  //     articles: {
  //       create: {
  //         title: 'Jane First Article',
  //         body: 'This is Janes first article',
  //       },
  //     },
  //   },
  // });
  //   -----------------------
  // CREATE ANOTEHR ARTICLE
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Sample Article 3',
  //     body: 'This is a Sample Article 3',
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });
  // console.log(article);
  //   -----------------------
  // // LOOP OVER SARAH ARTICLES
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}`);
  //   console.log(`Articles:`);
  //   user.articles.forEach((article) => {
  //     console.log(`- Title: ${article.title}`);
  //   });
  //   console.log('\n');
  // });
  //   -----------------------
  // // UPDATE USER
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: 'John Doe Jr',
  //   },
  // });
  // console.log(user);
  //   -----------------------
  // REMOVE ARTICLE
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
