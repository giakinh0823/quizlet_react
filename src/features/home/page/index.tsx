import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Banner from "../components/Banner";
import HomeContent from "../components/HomeContent";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack direction="column" alignItems="flex-start">
        <Banner />
        <Container maxWidth="lg">
          <Box sx={{ width: "100%" }}>
            <Box
              mt={10}
              mb={10}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  backgroundImage:
                    "url('https://assets.quizlet.com/a/j/dist/app/i/prismic/scribble.6c75e80726e3401.svg')",
                  backgroundSize: "cover",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "120px",
                  height: "80px",
                  marginRight: 2,
                }}
              >
                90%
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                of students who use Quizlet report higher grades.
              </Typography>
            </Box>
            <Box>
              <HomeContent
                title="Explanations you can trust."
                image="https://images.prismic.io/quizlet-prod/99cd5988-f3a3-4432-aa3c-1e8941f59cb9_20210814_QZ_Home_Explanations.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
                content="Quizlet explanations show you step-by-step approaches to solve tough problems. Find solutions in 64 subjects, all written and verified by experts."
              />
            </Box>
            <Box>
              <HomeContent
                title="Flashcards on repeat. Study modes on shuffle."
                image="https://images.prismic.io/quizlet-prod/d4052d90-f71e-466a-86f5-080cf02de2da_20210814_QZ_Home_Flashcards.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
                content="Mixed with smart study tools, our flashcards have been helping students ace their toughest exams since 2005."
                rotate={true}
              />
            </Box>
            <Box>
              <HomeContent
                title="Whether you plan or cram, find your study jam."
                image="https://images.prismic.io/quizlet-prod/3a92729c-f212-4ac0-8dad-b2c875c57358_20210814_QZ_Home_StudyJam.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
                content="Early morning? All-nighter? With teaching methods backed by learning science, Quizlet is designed to save you time."
              />
            </Box>
            <Box>
              <HomeContent
                title="Millions of study sets."
                image="https://images.prismic.io/quizlet-prod/6b2ff704-ccbf-441e-9b49-dbd3b7d7d530_20210814_QZ_Home_MobileApp.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
                content="Find, study or create sets anywhere life takes you with the mobile app."
                rotate={true}
              />
            </Box>
          </Box>
        </Container>
      </Stack>
    </Box>
  );
}
