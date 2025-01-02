"use server";

import { client } from "@/lib/prisma";
import { v4 } from "uuid";

export const createAutomation = async (clerkId: string, id?: string) => {
  return await client.user.update({
    where: {
      clerkId,
    },
    data: {
      automations: {
        create: {
          ...(id && { id }),
        },
      },
    },
  });
};

export const getAutomations = async (clerkId: string) => {
  const start = Date.now();

  const result = await client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      automations: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          keywords: true,
          listener: true,
        },
      },
    },
  });
  console.log("All Automations Execution Time:", Date.now() - start, "ms");

  return result;
};

export const findAutomation = async (id: string) => {
  const start = Date.now();

  const automation = await client.automation.findUnique({
    where: {
      id,
    },
    include: {
      keywords: true,
      trigger: true,
      posts: true,
      listener: true,
      User: {
        select: {
          subscription: true,
          integrations: true,
        },
      },
    },
  });

  console.log("Single Automation Execution Time:", Date.now() - start, "ms");

  return automation;
};

export const updateAutomation = async (
  id: string,
  update: {
    name?: string;
    active?: boolean;
  }
) => {
  return await client.automation.update({
    where: { id },
    data: {
      name: update.name,
      active: update.active,
    },
  });
};

export const addListener = async (
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  return await client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      listener: {
        create: {
          listener,
          prompt,
          commentReply: reply,
        },
      },
    },
  });
};

export const addTrigger = async (automationId: string, trigger: string[]) => {
  if (trigger.length === 2) {
    return await client.automation.update({
      where: { id: automationId },
      data: {
        trigger: {
          createMany: {
            data: [{ type: trigger[0] }, { type: trigger[1] }],
          },
        },
      },
    });
  }
  return await client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      trigger: {
        create: {
          type: trigger[0],
        },
      },
    },
  });
};

export const addKeyWord = async (automationId: string, keyword: string) => {
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      keywords: {
        create: {
          word: keyword,
        },
      },
    },
  });
};

export const deleteKeywordQuery = async (id: string) => {
  return client.keyword.delete({
    where: { id },
  });
};

export const addPost = async (
  autmationId: string,
  posts: {
    postid: string;
    caption?: string;
    media: string;
    mediaType: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
  }[]
) => {
  return await client.automation.update({
    where: {
      id: autmationId,
    },
    data: {
      posts: {
        createMany: {
          data: posts,
        },
      },
    },
  });
};

export const canActivateAutomation = async (automationId: string) => {
  const automation = await client.automation.findUnique({
    where: {
      id: automationId,
    },
    select: {
      trigger: {
        select: {
          id: true,
        },
      },
      listener: {
        select: {
          id: true,
        },
      },
    },
  });

  const hasTrigger = automation?.trigger !== null;
  const hasListener = automation?.listener !== null;

  return hasTrigger && hasListener;
};
