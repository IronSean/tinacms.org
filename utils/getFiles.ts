import { getFiles as getGithubFiles } from 'next-tinacms-github'
import path from 'path'

const getLocalFiles = async (filePath: string) => {
  // grab all md files
  const fg = require('fast-glob')
  const glob = path.resolve(filePath, '*')
  const files = await fg(glob)

  return files
}

export const getFiles = async (
  filePath: string,
  repoFullName: string,
  branch: string,
  accessToken?: string
) => {
  if (accessToken) {
    return getGithubFiles(filePath, repoFullName, branch, accessToken)
  } else {
    return getLocalFiles(filePath)
  }
}
