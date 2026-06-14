import fs from "fs";
import os from "os";
import path from "path";

export type Config = {
  dbUrl: string;
  currentUserName: string;
}

export function setUser(user:string){
  // Pull the config
  // parse it
  // edit it
  // write it
  return;
}

export function readConfig():Config {
  // use os.homedir() to get the string path of the home directory
  return;
}


function getConfigFilePath(): string {
  const homeDir = os.homedir()
  const configFilePath = path.join(homeDir, ".gatorconfig.json")
  return configFilePath;
}

// writeConfig(cfg: Config): void

export function validateConfig(rawConfig: any): Config {
  return;
}


// After this file is finished;
// Update the main function to:
// Set the current user to "Lane" (actually, you should use your name instead) and update the config file on disk.
// Read the config file again, parse it into a config object and print it to the terminal.

