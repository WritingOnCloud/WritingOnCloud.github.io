# Git Commands

## Configuration: 
    git config --global user.name "Your Name": Set your name for all repositories.  
    git config --global user.email "youremail@example.com": Set your email for all repositories.  
    git config --global alias.<alias-name> <git-command>: Create an alias for a Git command.  

## Creating and Cloning Repositories:  
    git init: Create a new Git repository in the current directory.  
    git clone <repository-url>: Clone a remote repository to your local machine.  

## Branching:  
    git branch: List all branches in the repository.  
    git branch <branch-name>: Create a new branch.  
    git checkout <branch-name>: Switch to a different branch.  
    git checkout -b <branch-name>: Create and switch to a new branch.  
    git merge <branch-name>: Merge changes from a branch into the current branch.  
    git branch -d <branch-name>: Delete a branch.

## Working with Changes:
    git status: Show the status of the working directory.  
    git add <file>: Stage a file for commit.  
    git add .: Stage all changes for commit.  
    git commit -m "Commit message": Commit staged changes with a message.  
    git commit --amend: Amend the most recent commit.  
    git reset <file>: Unstage a file.  
    git reset --hard HEAD: Discard all changes and reset to the last commit.  
    git stash: Stash changes in a dirty working directory for later use.  
    git stash pop: Apply the most recently stashed changes and remove them from the stash.  
    git diff: Show changes between the working directory and the last commit.  
    git log: Display commit history.  

## Remote Repositories:
    git remote -v: List remote repositories.  
    git remote add <name> <url>: Add a remote repository.  
    git push <remote> <branch>: Push changes to a remote repository.  
    git pull <remote> <branch>: Fetch changes from a remote repository and merge them into the current branch.  
    git fetch: Fetch changes from a remote repository without merging.  

## Collaboration:  
    git branch -r: List remote branches.  
    git branch -a: List both local and remote branches.  
    git checkout -b <branch-name> <remote>/<branch-name>: Create a new branch based on a remote branch.  
    git push --set-upstream <remote> <branch-name>: Set the upstream branch for a local branch.  
    git clone <repository-url>: Clone a remote repository to your local machine.  
    git pull-request: Create a pull request to propose changes to a repository.  
    git merge --no-ff <branch-name>: Merge a branch with a new commit, even if it is a fast-forward merge.  

## Undoing Changes:  
    git revert <commit>: Create a new commit that undoes changes from a previous commit.   
    git reset --hard <commit>: Reset the repository to a specific commit, discarding all subsequent commits.  
    git reset --soft <commit>: Reset the repository to a specific commit, keeping all subsequent commits as uncommitted changes.  

## Git Tagging:  
    git tag: List all tags in the repository.  
    git tag <tag-name>: Create a new tag at the current commit.  
    git tag -a <tag-name> -m "Tag message": Create an annotated tag with a message.  
    git tag -d <tag-name>: Delete a tag.  

## Advanced Git:
    git rebase <branch>: Reapply commits from one branch onto another branch.  
    git cherry-pick <commit>: Apply a specific commit to the current branch.  
    git bisect: Find the commit that introduced a bug using binary search.  
    git reflog: Show a log of all branch updates and commit changes.  
    git blame <file>: Show who last modified each line of a file.  
    
