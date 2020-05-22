# OpenSourceEvents-Frontend

This website contains a list of open source events and hackathons. They are in a proper month wise timeline so the user does not face difficulty while searching through the open source events. Most of the times students want to participate in the events but they dont know the dates or the event details. This repo contains links of the events and when are the events going to take place.<br/>
## website-https://opensourcefrontend.netlify.app/

## ScreenShots
![](https://raw.githubusercontent.com/Catalyst-SMVD/OpenSourceEvents-Frontend/master/Assets/open.png)

![](https://raw.githubusercontent.com/Catalyst-SMVD/OpenSourceEvents-Frontend/master/Assets/timeline.png)

## Configure remotes
When a repository is cloned, it has a default remote called `origin` that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named `upstream`:<br />
1. Get the path where you have your git repository on your machine. Go to that path in Terminal using cd. Alternatively, Right click on project in Github Desktop and hit ‘Open in Terminal’.<br />
2. Run `git remote -v`  to check the status you should see something like the following:<br />
> origin    https://github.com/YOUR_USERNAME/OpenSourceEvents-Frontend.git (fetch)<br />
> origin    https://github.com/YOUR_USERNAME/OpenSourceEvents-Frontend.git (push)<br />
3. Set the `upstream`:<br />
 `git remote add upstream https://github.com/Catalyst-CSE/OpenSourceEvents-Frontend.git`<br />
4. Run `git remote -v`  again to check the status, you should see something like the following:<br />
> origin    https://github.com/YOUR_USERNAME/OpenSourceEvents-Frontend.git (fetch)<br />
> origin    https://github.com/YOUR_USERNAME/OpenSourceEvents-Frontend.git (push)<br />
> upstream  https://github.com/Catalyst-CSE/OpenSourceEvents-Frontend.git (fetch)<br />
> upstream  https://github.com/Catalyst-CSE/OpenSourceEvents-Frontend.git (push)<br />
5. To update your local copy with remote changes, run the following:<br />
`git fetch upstream develop`<br />
 `git rebase  upstream/develop`<br />
This will give you an exact copy of the current remote, make sure you don't have any local changes.<br />
6. Project set-up is complete.

## Contributing and developing a feature
1. Make sure you are in the develop branch `git checkout develop`.<br />
2. Sync your copy `git pull --rebase upstream develop`.<br />
3. Create a new branch with a meaningful name `git checkout -b branch_name`.<br />
4. Develop your feature on Xcode IDE  and run it using the simulator or connecting your own iphone.<br />
5. Add the files you changed `git add file_name` (avoid using `git add .`).<br />
6. Commit your changes `git commit -m "Message briefly explaining the feature"`.<br />
7. Keep one commit per feature. If you forgot to add changes, you can edit the previous commit `git commit --amend`.<br />
8. Push to your repo `git push origin branch-name`.<br />
9. Go into [the Github repo](https://github.com/Catalyst-SMVD/OpenSourceEvents-Frontend) and create a pull request explaining your changes.<br />
10. If you are requested to make changes, edit your commit using `git commit --amend`, push again and the pull request will edit automatically.<br />
11. If you have more than one commit try squashing them into single commit by following command:<br />
 `git rebase -i origin/master~n master`(having n number of commits).<br />
 12. Once you've run a git rebase -i command, text editor will open with a file that lists all the commits in current branch, and in front of each commit is the word "pick". For every line except the first, replace the word "pick" with the word "squash".<br />
 13. Save and close the file, and a moment later a new file should pop up in  editor, combining all the commit messages of all the commits. Reword this commit message into meaningful one briefly explaining all the features, and then save and close that file as well. This commit message will be the commit message for the one, big commit that you are squashing all of your larger commits into. Once you've saved and closed that file, your commits of current branch have been squashed together.<br />
14. Force push to update your pull request with command `git push origin branchname --force`.<br/>

## Update local branch with latest changes

```
- git checkout master
- git fetch --all --prune
- git merge --ff-only upstream/master
- git push origin master
```


## 🤝 How to Contribute

### For sending PR:-
>-   Pick an open issue from the  [issue list](https://github.com/Catalyst-SMVD/OpenSourceEvents-Frontend/issues)  and claim it in the comments. After approval fix the issue and send us a pull request (PR).
>-   All the PR’s need to be sent to the appropriate branch (usually "master").

### For Open issue:-
>-   You can create a new issue and send a pull request.
>-   Please go through our issue list first (open as well as closed) and make sure the issue you are reporting does not replicate an issue already reported. If you have issues on multiple pages, report them separately. Do not combine them into a single issue.

<br>

## Contact
 
You can reach the maintainers and our community on [Catalyst-discord](https://discord.gg/dHtDhHa). If you are interested in contributing to the OpenSourceEvents-Frontend, we have a dedicated stream for this project [#OpenSourceEvents-Frontend](https://discord.gg/9wmvkGW), where you can ask questions and interact with the community, join with us!

💜 **Thanks**
Thanks to our many contributors.
