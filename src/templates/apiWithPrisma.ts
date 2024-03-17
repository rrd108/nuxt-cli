import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
  
export default defineEventHandler(async event => {
  if (event.node.req.method == 'GET') {
    
    if (event.node.req.query.id) {
      const ${name} = await prisma.${name}.findUnique({ where: { id: event.node.req.query.id } })
      return ${name}
    }

    const ${name} = await prisma.${name}.findMany()
    return ${name}
  }
  
  if (event.node.req.method == 'POST') {
    const data = await readBody(event)
    const ${name} = await prisma.${name}.create({ data })
    if (!${name}) {
      throw createError({ status: 401, message: '${name} creation error' })
    }
    return ${name}
  }

  if (event.node.req.method == 'PATCH') {
    const data = await readBody(event)
    const ${name} = await prisma.${name}.update({ where:{ id:d ata.id }, data })
    if (!${name}) {
      throw createError({ status: 401, message: '${name} patch error' })
    }
    return ${name}
  }

  if (event.node.req.method == 'DELETE') {
    const ${name} = await prisma.${name}.delete({ where:{ id:d ata.id }})
    if (!${name}) {
      throw createError({ status: 401, message: '${name} delete error' })
    }
    return ${name}
  }
})