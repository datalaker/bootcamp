"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={},r="Containers",i={unversionedId:"devops/containers/README",id:"devops/containers/README",title:"Containers",description:"Docker",source:"@site/docs/07-devops/containers/README.md",sourceDirName:"07-devops/containers",slug:"/devops/containers/",permalink:"/docs/devops/containers/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"DevOps",permalink:"/docs/devops/"},next:{title:"Infra as Code (IaC)",permalink:"/docs/devops/iac/"}},l={},c=[{value:"Docker",id:"docker",level:2},{value:"Layers",id:"layers",level:3},{value:"Docker\xa0Image",id:"dockerimage",level:3},{value:"Docker\xa0Container",id:"dockercontainer",level:3},{value:"Bind Mounts and Volumes",id:"bind-mounts-and-volumes",level:3},{value:"Docker Registry",id:"docker-registry",level:3},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Docker\xa0Engine",id:"dockerengine",level:3},{value:"Makefile",id:"makefile",level:3},{value:"Courses",id:"courses",level:3},{value:"Amazon ECS (Elastic Container Service)",id:"amazon-ecs-elastic-container-service",level:2},{value:"Amazon EKS (Elastic Kubernetes Service)",id:"amazon-eks-elastic-kubernetes-service",level:2},{value:"Labs",id:"labs",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"containers"},"Containers"),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Docker is a tool that enables easy management of the entire container ecosystem. Docker has a command-line tool that makes running containers easy, as well as creating, downloading, and managing container images. Docker also comes with a desktop application, Docker Desktop, that makes container management even easier. Finally, the company that built the Docker tool also runs Docker Hub, which makes it easy to store and access container images in the cloud."),(0,o.kt)("p",null,"Docker has been at the forefront of container management throughout its technological growth. Many of the modern standards around containers arose from features that originated in Docker, and even those that arose elsewhere were popularized by having an easy-to-use tool to make them accessible to the average developer. Docker is known as a \u201ccontainer runtime,\u201d as it contains the tools to make the containers boot up and execute in their own provisioned space."),(0,o.kt)("p",null,"Docker was first introduced to the world\u2014with no pre-announcement and little fanfare\u2014by Solomon Hykes, founder and CEO of a company then called dotCloud, in a five-minute lightning talk at the Python Developers Conference in Santa Clara, California on March 15, 2013. At the time of this announcement, only about 40 people outside of dotCloud had been given the opportunity to play with Docker."),(0,o.kt)("p",null,"Within a few weeks of this announcement, there was a surprising amount of press. The project was quickly open-sourced and made publicly available on GitHub, where anyone could download and contribute to the project. Over the next few months, more and more people in the industry started hearing about Docker and how it was going to revolutionize the way software was built, delivered, and run. And within a year, almost no one in the industry was unaware of Docker, but many were still unsure what it was exactly, and why people were so excited about it."),(0,o.kt)("p",null,"Docker is a tool that promises to easily encapsulate the process of creating a distributable artifact for any application, deploying it at scale into any environment, and streamlining the workflow and responsiveness of agile software organizations."),(0,o.kt)("h3",{id:"layers"},"Layers"),(0,o.kt)("p",null,"A\xa0",(0,o.kt)("em",{parentName:"p"},"layer"),"\xa0is a modification applied to a Docker image as represented by an instruction in a Dockerfile. Typically, a layer is created when a base image is changed---for example, consider a Dockerfile that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM ubuntu\nRun mkdir /tmp/logs\nRUN apt-get install vim\nRUN apt-get install htop\n")),(0,o.kt)("p",null,"Now in this case, Docker will consider\xa0Ubuntu\xa0image as the base image and add three layers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One layer for creating\xa0/tmp/logs"),(0,o.kt)("li",{parentName:"ul"},"One other layer that installs\xa0vim"),(0,o.kt)("li",{parentName:"ul"},"A third layer that installs\xa0htop")),(0,o.kt)("p",null,"When Docker builds the image, each layer is stacked on the next and merged into a single layer using the\xa0union\xa0filesystem. Layers are uniquely identified using\xa0sha256\xa0hashes. This makes it easy to reuse and cache them. When Docker scans a base image, it scans for the IDs of all the layers that constitute the image and begins to download the layers. If a layer exists in the local cache, it skips downloading the cached image."),(0,o.kt)("h3",{id:"dockerimage"},"Docker\xa0Image"),(0,o.kt)("p",null,"Docker image is a read-only template that forms the foundation of your application. It is very much similar to, say, a shell script that prepares a system with the desired state. In simpler terms, it's the equivalent of a cooking recipe that has step-by-step instructions for making the final dish."),(0,o.kt)("p",null,"A Docker image starts with a base image---typically the one selected is that of an operating system are most familiar with, such as Ubuntu. On top of this image, we can add build our application stack adding the packages as and when required."),(0,o.kt)("p",null,"There are many pre-built images for some of the most common application stacks, such as Ruby on Rails, Django, PHP-FPM with\xa0nginx, and so on. On the advanced scale, to keep the image size as low as possible, we can also start with slim packages, such as Alpine or even Scratch, which is Docker's reserved, minimal starting image for building other images."),(0,o.kt)("p",null,"Docker images are created using a series of commands, known as instructions, in the Dockerfile. The presence of a Dockerfile in the root of a project repository is a good indicator that the program is container-friendly. We can build our own images from the associated Dockerfile and the built image is then published to a registry. We will take a deeper look at Dockerfile in later chapters. For now, consider the Docker image as the final executable package that contains everything to run an application. This includes the source code, the required libraries, and any dependencies."),(0,o.kt)("h3",{id:"dockercontainer"},"Docker\xa0Container"),(0,o.kt)("p",null,"A Docker image, when it's run in a host computer, spawns a process with its own namespace, known as a\xa0",(0,o.kt)("em",{parentName:"p"},"Docker container"),". The main difference between a Docker image and a container is the presence of a thin read/write layer known as the container layer. Any changes to the filesystem of a container, such as writing new files or modifying existing files, are done to this writable container layer than the lower layers."),(0,o.kt)("p",null,"An important aspect to grasp is that when a container is running, the changes are applied to the container layer and when the container is stopped/killed, the container layer is not saved. Hence, all changes are lost. This aspect of containers is not understood very well and for this reason, stateful applications and those requiring persistent data were initially not recommended as containerized applications. However, with Docker Volumes, there are ways to get around this limitation."),(0,o.kt)("h3",{id:"bind-mounts-and-volumes"},"Bind Mounts and Volumes"),(0,o.kt)("p",null,"We mentioned previously that when a container is running, any changes to the container are present in the container layer of the filesystem. When a container is killed, the changes are lost and the data is no longer accessible. Even when a container is running, getting data out of it is not very straightforward. In addition, writing into the container's writable layer requires a storage driver to manage the filesystem. The storage driver provides an abstraction on the filesystem available to persist the changes and this abstraction often reduces performance."),(0,o.kt)("p",null,"For these reasons, Docker provides different ways to mount data into a container from the Docker host: volumes, bind mounts, and\xa0tmpfs\xa0volumes. While\xa0tmpfs\xa0volumes are stored in the host system's memory only, bind mounts and volumes are stored in the host filesystem."),(0,o.kt)("h3",{id:"docker-registry"},"Docker Registry"),(0,o.kt)("p",null,"We mentioned earlier that you can leverage existing images of common application stacks---have you ever wondered where these are and how you can use them in building your application? A Docker Registry is a place where you can store Docker images so that they can be used as the basis for an application stack. Some common examples of Docker\xa0registries\xa0include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Hub"),(0,o.kt)("li",{parentName:"ul"},"Google Container Registry"),(0,o.kt)("li",{parentName:"ul"},"Amazon Elastic Container Registry"),(0,o.kt)("li",{parentName:"ul"},"JFrog Artifactory")),(0,o.kt)("p",null,"Most of these registries also allow for the visibility level of the images that you have pushed to be set as public/private. Private registries will prevent your Docker images from being accessible to the public, allowing you to set up access control so that only authorized users can use your Docker image."),(0,o.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,"A\xa0",(0,o.kt)("em",{parentName:"p"},"Dockerfile"),"\xa0is a set of instructions that tells Docker how to build an image. A typical Dockerfile is made up of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A\xa0FROM\xa0instruction that tells Docker what the base image is"),(0,o.kt)("li",{parentName:"ul"},"An\xa0ENV\xa0instruction to pass an environment variable"),(0,o.kt)("li",{parentName:"ul"},"A\xa0RUN\xa0instruction to run some shell commands (for example, install-dependent programs not available in the base image)"),(0,o.kt)("li",{parentName:"ul"},"A\xa0CMD\xa0or an\xa0ENTRYPOINT\xa0instruction that tells Docker which executable to run when a container is started")),(0,o.kt)("p",null,"As you can see, the Dockerfile instruction set has clear and simple syntax, which makes it easy to understand."),(0,o.kt)("h3",{id:"dockerengine"},"Docker\xa0Engine"),(0,o.kt)("p",null,"Docker Engine is the core part of Docker. Docker Engine is a client-server application that provides the platform, the runtime, and the tooling for building and managing Docker images, Docker containers, and more. Docker Engine provides the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker daemon"),(0,o.kt)("li",{parentName:"ul"},"Docker CLI"),(0,o.kt)("li",{parentName:"ul"},"Docker API")),(0,o.kt)("h3",{id:"makefile"},"Makefile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},'random:\n    sudo chown -R 1001 /var/run/docker.sock\n    docker run -p 80:80 -e \'PGADMIN_DEFAULT_EMAIL=u@dom.l\' -e \'PGADMIN_DEFAULT_PASSWORD=1579\' --name devgadmin -d dpage/pgadmin4\n    docker run -d --name toscript -e \'POSTGRES_PASSWORD=1234\' -v /home/postgres-data/:/var/lib/postgresql/data -p 5431:5431 postgres\ncompose-build:\n    ~/bin/docker-compose build\ncompose-up:\n    ~/bin/docker-compose up -d\ncompose-down:\n    ~/bin/docker-compose down\nlist:\n    docker ps\ncreate-container:\n    docker run CONTAINER --network NETWORK\n    docker run -t -i -p 80:80 hello-world\nstart-stopped-container:\n    docker start CONTAINER NAME\nstop-running-container:\n    docker stop\nlist-running-containers:\n    docker ps\nlist-all-containers-including-stopped-ones:\n    docker ps -a\ninspect-container-config:\n    docker inspect CONTAINER\nlist-all-available-virtual-networks:\n    docker network ls\nCreate a new network:\n    docker network create NETWORK --driver bridge\nConnect a running container to a network:\n    docker network connect NETWORK CONTAINER\nDisconnect a running container from a network:\n    docker network disconnect NETWORK CONTAINER\nRemove a network:\n    docker network rm NETWORK\nbuild:\n    docker build -t my_first_image .\n    docker build .\n    docker build <dockerfile_path>\n    docker images --filter reference=my_first_image\nInstall docker on Cloud9 and EC2:\n    sudo apt-get update\n    sudo apt-get remove docker docker-engine docker.io\n    sudo apt install docker.io\n    sudo systemctl start docker\n    sudo systemctl enable docker\n    sudo apt install gnome-keyring\n    curl -L https://raw.githubusercontent.com/docker/compose-cli/main/scripts/install/install_linux.sh | sh\n    VERSION=$(curl --silent https://api.github.com/repos/docker/compose/releases/latest | grep -Po \'"tag_name": "\\K.*\\d\')\n    DESTINATION=/usr/bin/docker-compose\n    sudo curl -L https://github.com/docker/compose/releases/download/${VERSION}/docker-compose-$(uname -s)-$(uname -m) -o $DESTINATION\n    sudo chmod 755 $DESTINATION\nInstall docker on EC2 in general:\n    # #!/bin/bash\n    # Linux-only installation script\n    # This script installs the two main required packages to install the separate dockers:\n    # docker engine to run dockers, and docker compose to run multicontainers together.\n\n    sudo apt-get update\n\n    sudo apt-get -y install \\\n        apt-transport-https \\\n        ca-certificates \\\n        curl \\\n        gnupg \\\n        lsb-release\n\n    # Add docker gpg key\n    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --yes --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n\n    # Set up a stable repository for x86_64\n    echo \\\n    "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n    sudo apt-get update\n    sudo apt-get -y install docker-ce docker-ce-cli containerd.io\n    sudo apt-get install vim\n\n    # Install docker compose\n    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\n    # Make docker-compose "executable"\n    sudo chmod +x /usr/local/bin/docker-compose\n\n    # Test docker engine\n    # sudo docker run hello-world\n\n    # Test docker compose installation\n    # sudo docker-compose --version\n')),(0,o.kt)("h3",{id:"courses"},"Courses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devopswithdocker.com/"},"https://devopswithdocker.com/"))),(0,o.kt)("h2",{id:"amazon-ecs-elastic-container-service"},"Amazon ECS (Elastic Container Service)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},"Create AWS context:\n    docker context create ecs myecscontext\nList available contexts:\ndocker context ls\nInstall ECS CLI - Linux:\n    # ref - https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html\n    sudo curl -Lo /usr/local/bin/ecs-cli https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-linux-amd64-latest\n    wget -q --show-progress https://github.com/recohut/udacity_dend/raw/main/data_modeling_postgres/ecs_pgp.txt\n    gpg --import ecs_pgp.txt\n    curl -Lo ecs-cli.asc https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-linux-amd64-latest.asc\n    gpg --verify ecs-cli.asc /usr/local/bin/ecs-cli\n    sudo chmod +x /usr/local/bin/ecs-cli\n    ecs-cli --version\nInstall ECS CLI - Mac:\n    # ref - https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html\n    curl -Lo /usr/local/bin/ecs-cli https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-darwin-amd64-latest\n    brew install gnupg\n    brew install bind\n    gpg --import ecs_pgp.txt\n    curl -Lo ecs-cli.asc https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-darwin-amd64-latest.asc\n    gpg --verify ecs-cli.asc /usr/local/bin/ecs-cli\n    chmod +x /usr/local/bin/ecs-cli\n    ecs-cli --version\nCreate and Manage Clusters in ECS:\n    ecs-cli configure --cluster asparsh-cluster-1 --default-launch-type EC2 --region us-east-1\n    ecs-cli configure --cluster asparsh-cluster-1 --default-launch-type FARGATE --region us-east-1\n\n    aws ec2 create-key-pair --key-name asparsh-cluster-1 --query 'KeyMaterial' --output text > ~/.ssh/asparsh-cluster-1.pem\n    chmod 400 ~/.ssh/asparsh-cluster-1.pem\n\n    ecs-cli up --keypair asparsh-cluster-1 --capability-iam --size 1 --instance-type r5a.xlarge --tags project=asparsh-cluster-1,owner=Sparsh\n    ecs-cli up --keypair asparsh-cluster-1 --capability-iam --tags project=asparsh-cluster-1,owner=Sparsh\n\n    ecs-cli compose --project-name asparsh-cluster-1 --file docker-compose.yml --debug service up --deployment-max-percent 100 --deployment-min-healthy-percent 0\n    ecs-cli ps\n    aws ec2 describe-security-groups --filters Name=tag:project,Values=asparsh-cluster-1\n    aws ec2 authorize-security-group-ingress --group-id sg-xxxxxxxx --protocol tcp --port 5432 --cidr 0.0.0.0/0\n    aws ecs delete-service --cluster asparsh-cluster-1 --service asparsh-cluster-1 --force\n    aws ecs delete-cluster --cluster asparsh-cluster-1\n")),(0,o.kt)("h2",{id:"amazon-eks-elastic-kubernetes-service"},"Amazon EKS (Elastic Kubernetes Service)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},'Installation-MacOS:\n    aws sts get-caller-identity\n    brew tap weaveworks/tap\n    brew install weaveworks/tap/eksctl\n    aws eks update-kubeconfig --region us-east-1 --name kubeflow-poc\n# If your current user is different from the user/role used to create EKS, you will get the Unauthorized error. Follow this blog to easily resolve this issue: https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/\nInstallation-Linux:\n    curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp\n    sudo mv /tmp/eksctl /usr/local/bin\n    eksctl create cluster --name my-cluster --region region-code\n    export NODEGROUP_NAME=$(eksctl get nodegroups --cluster kubeflow-poc -o json | jq -r \'.[0].Name\')\n    eksctl scale nodegroup --cluster kubeflow-poc --name $NODEGROUP_NAME --nodes 6 --nodes-max 6\n    curl --silent --location "https://github.com/kubeflow/kfctl/releases/download/v1.0.1/kfctl_v1.0.1-0-gf3edb9b_linux.tar.gz" | tar xz -C /tmp\n    sudo mv -v /tmp/kfctl /usr/local/bin\nkf-install.sh:\n    cat << EoF > \n    export AWS_CLUSTER_NAME=kubeflow-poc\n    export KF_NAME=\\${AWS_CLUSTER_NAME}\n\n    export BASE_DIR=${HOME}/environment\n    export KF_DIR=\\${BASE_DIR}/\\${KF_NAME}\n\n    # export CONFIG_URI="https://raw.githubusercontent.com/kubeflow/manifests/v1.0-branch/kfdef/kfctl_aws_cognito.v1.0.1.yaml"\n    export CONFIG_URI="https://raw.githubusercontent.com/kubeflow/manifests/v1.0-branch/kfdef/kfctl_aws.v1.0.1.yaml"\n\n    export CONFIG_FILE=\\${KF_DIR}/kfctl_aws.yaml\n    EoF\n\n    source kf-install.sh\n\n    mkdir -p ${KF_DIR}\n    cd ${KF_DIR}\n\n    wget -O kfctl_aws.yaml $CONFIG_URI\n# Reference: https://www.eksworkshop.com/advanced/420_kubeflow/install/\nInstall `kubectl`:\n    sed -i \'/region: us-east-1/ a \\      enablePodIamPolicy: true\' ${CONFIG_FILE}\n    sed -i -e \'s/kubeflow-aws/\'"$AWS_CLUSTER_NAME"\'/\' ${CONFIG_FILE}\n    sed -i "s@us-west-2@$AWS_REGION@" ${CONFIG_FILE}\n    sed -i "s@roles:@#roles:@" ${CONFIG_FILE}\n    sed -i "s@- eksctl-kubeflow-poc-nodegroup-ng-a2-NodeInstanceRole-xxxxxxx@#- eksctl-kubeflow-poc-nodegroup-ng-a2-NodeInstanceRole-xxxxxxx@" ${CONFIG_FILE}\n    curl -o aws-iam-authenticator https://amazon-eks.s3.us-west-2.amazonaws.com/1.15.10/2020-02-22/bin/linux/amd64/aws-iam-authenticator\n    chmod +x aws-iam-authenticator\n    sudo mv aws-iam-authenticator /usr/local/bin\n    cd ${KF_DIR}\n    kfctl apply -V -f ${CONFIG_FILE}\n    kubectl -n kubeflow get all\n    kubectl port-forward svc/istio-ingressgateway -n istio-system 8080:80\nDeleting EKS:\n    kubectl get svc --all-namespaces\n    eksctl delete cluster --name kubeflow-poc\n')),(0,o.kt)("h2",{id:"labs"},"Labs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy docker in Amazon ECS [",(0,o.kt)("a",{parentName:"li",href:"07-devops/containers/lab-deploy-simple-docker-ecs/"},"source code"),"]"),(0,o.kt)("li",{parentName:"ol"},"Build and deploy NodeJS Kubia app in Kubernetes [",(0,o.kt)("a",{parentName:"li",href:"07-devops/containers/lab-kubernetes-kubia-app/"},"source code"),"]"),(0,o.kt)("li",{parentName:"ol"},"Build Address parsing system in python and dockerize it [",(0,o.kt)("a",{parentName:"li",href:"07-devops/containers/lab-assignment-etl-docker/"},"source code"),"]")))}u.isMDXComponent=!0}}]);