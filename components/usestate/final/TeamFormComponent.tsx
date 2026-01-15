"use client";

import { memo, useState } from "react";
import InitialType from '../datatypes/InitialType';

type Skill = string;

type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  skills: Skill[];
  isActive: boolean;
};

type TeamSettings = {
  maxMembers: number;
  allowInactive: boolean;
  requireSkills: boolean;
};

type Team = {
  info: {
    name: string;
    description: string;
  };
  settings: TeamSettings;
  members: TeamMember[];
};

export default function TeamFormComponent() {
  const initialTeam: Team = {
    info: {
      name: "",
      description: "",
    },
    settings: {
      maxMembers: 10,
      allowInactive: true,
      requireSkills: false,
    },
    members: [],
  };

  const [team, setTeam] = useState<Team>(initialTeam);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");

  // ========================================
  // TODO: TEAM INFO FUNCTIONS
  // ========================================

  const updateTeamName = (name: string) => {
    setTeam({ ...team, info: { ...team.info, name } });
    // Update team.info.name
  };

  const updateTeamDescription = (description: string) => {
    setTeam({ ...team, info: { ...team.info, description } });
    // Update team.info.description
  };

  // ========================================
  // TODO: TEAM SETTINGS FUNCTIONS
  // ========================================

  const updateMaxMembers = (max: number) => {
    setTeam({ ...team, settings: { ...team.settings, maxMembers: max } });
    // Update team.settings.maxMembers
  };

  const toggleAllowInactive = () => {
    setTeam({
      ...team,
      settings: {
        ...team.settings,
        allowInactive: !team.settings.allowInactive,
      },
    });
    // Toggle team.settings.allowInactive
  };

  const toggleRequireSkills = () => {
    setTeam({
      ...team,
      settings: {
        ...team.settings,
        requireSkills: !team.settings.requireSkills,
      },
    });
    // Toggle team.settings.requireSkills
  };

  // ========================================
  // TODO: MEMBER CRUD FUNCTIONS
  // ========================================

  const addMember = () => {
    // 1. Validate inputs
    // 2. Check if team is full (maxMembers)
    // 3. Create new member with empty skills array
    // 4. Add to team.members array
    // 5. Clear input fields

    if (canAddMember) {
      const teamMember = {
        id: crypto.randomUUID(),
        name: newMemberName,
        role: newMemberRole,
        email: newMemberEmail,
        isActive: true,
        skills: [],
      } as TeamMember;

      setTeam({ ...team, members: [...team.members, teamMember] });
      setNewMemberEmail("");
      setNewMemberName("");
      setNewMemberRole("");
    }
  };

  const removeMember = (id: string) => {
    setTeam({ ...team, members: team.members.filter((m) => m.id !== id) });
    // Remove member from team.members array
  };

  const updateMemberName = (id: string, name: string) => {
    setTeam({
      ...team,
      members: team.members.map((m) => m.id === id ? { ...m, name } : m),
    });
    // Update specific member's name in team.members array
  };

  const updateMemberRole = (id: string, role: string) => {
    setTeam({
      ...team,
      members: team.members.map((m) => (m.id === id ? { ...m, role } : m)),
    });
    // Update specific member's role in team.members array
  };

  const updateMemberEmail = (id: string, email: string) => {
    setTeam({
      ...team,
      members: team.members.map((m) => (m.id === id ? { ...m, email } : m)),
    });
    // Update specific member's email in team.members array
  };

  const toggleMemberActive = (id: string) => {
    setTeam({
      ...team,
      members: team.members.map((m) =>
        m.id === id ? { ...m, isActive: !m.isActive } : m
      ),
    });
    // Toggle specific member's isActive in team.members array
  };

  // ========================================
  // TODO: SKILLS FUNCTIONS (NESTED ARRAY!)
  // ========================================

  const addSkillToMember = (memberId: string, skill: string) => {
    // 1. Find member in array
    // 2. Add skill to member's skills array
    // 3. Update team.members array
    setTeam({
      ...team,
      members: team.members.map((m) =>
        m.id === memberId ? { ...m, skills: [...m.skills, skill] } : m
      ),
    });
  };

  const removeSkillFromMember = (memberId: string, skillIndex: number) => {
    // 1. Find member in array
    // 2. Remove skill from member's skills array
    // 3. Update team.members array
    setTeam({
      ...team,
      members: team.members.map((m) =>
        m.id === memberId
          ? {
              ...m,
              skills: m.skills.filter((_, index) => index !== skillIndex),
            }
          : m
      ),
    });
  };

  // ========================================
  // TODO: STATISTICS (DERIVED STATE)
  // ========================================

  const totalMembers = team.members.length; // team.members.length
  const activeMembers = team.members.reduce((count,m)=> (m.isActive ? count + 1 : count), 0); // Count where isActive = true
  const inactiveMembers = team.members.reduce((count,m)=> (!m.isActive ? count + 1 : count), 0);  // Count where isActive = false
  const totalSkills = team.members.reduce((sum,m) => sum + m.skills.length, 0); // Sum of all skills across all members
  const canAddMember = team.settings.maxMembers > team.members.length; // Check if under maxMembers limit
  const isTeamValid = team.info.name.trim() !== '' && team.info.description.trim() !== ''; // Check if team info is filled

  // ========================================
  // TODO: RESET FUNCTIONS
  // ========================================

  const resetTeamInfo = () => {
    setTeam({...team, info: {...initialTeam.info}})
    // Reset only team.info
  };

  const resetSettings = () => {
    setTeam({...team, settings: {...initialTeam.settings}})
    // Reset only team.settings
  };

  const clearAllMembers = () => {
    setTeam({...team, members: {...initialTeam.members}})
    // Clear team.members array
  };

  const resetAll = () => {
    setTeam(initialTeam)
    // Reset everything
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-6">🏆 FINAL BOSS: Team Manager</h1>

      {/* ========================================
          TEAM INFO SECTION
          ======================================== */}
      <div className="border-4 border-blue-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">📋 Team Info</h2>

        <div className="space-y-3">
          <div>
            <label className="block font-bold">Team Name:</label>
            <input
              type="text"
              value={team.info.name}
              onChange={(e) => updateTeamName(e.target.value)}
              placeholder="Enter team name"
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-bold">Description:</label>
            <textarea
              value={team.info.description}
              onChange={(e) => updateTeamDescription(e.target.value)}
              placeholder="Describe your team"
              className="border p-2 w-full"
              rows={2}
            />
          </div>
        </div>

        <button
          onClick={resetTeamInfo}
          className="border px-4 py-2 mt-3 text-sm"
        >
          Reset Info
        </button>
      </div>

      {/* ========================================
          TEAM SETTINGS SECTION
          ======================================== */}
      <div className="border-4 border-purple-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">⚙️ Team Settings</h2>

        <div className="space-y-3">
          <div>
            <label className="block font-bold">Max Members:</label>
            <input
              type="number"
              value={team.settings.maxMembers}
              onChange={(e) => updateMaxMembers(Number(e.target.value))}
              className="border p-2 w-full"
              min="1"
              max="50"
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={team.settings.allowInactive}
              onChange={toggleAllowInactive}
            />
            <span>Allow Inactive Members</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={team.settings.requireSkills}
              onChange={toggleRequireSkills}
            />
            <span>Require Skills for Members</span>
          </label>
        </div>

        <button
          onClick={resetSettings}
          className="border px-4 py-2 mt-3 text-sm"
        >
          Reset Settings
        </button>
      </div>

      {/* ========================================
          STATISTICS SECTION
          ======================================== */}
      <div className="border-4 border-green-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">📊 Team Statistics</h2>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>
            Total Members: <strong>{totalMembers}</strong>
          </p>
          <p>
            Active: <strong>{activeMembers}</strong>
          </p>
          <p>
            Inactive: <strong>{inactiveMembers}</strong>
          </p>
          <p>
            Total Skills: <strong>{totalSkills}</strong>
          </p>
          <p>
            Capacity:{" "}
            <strong>
              {totalMembers}/{team.settings.maxMembers}
            </strong>
          </p>
          <p>
            Can Add: <strong>{canAddMember ? "✅ Yes" : "❌ No"}</strong>
          </p>
        </div>

        <p className="mt-2">
          Team Valid: <strong>{isTeamValid ? "✅ Yes" : "❌ No"}</strong>
        </p>
      </div>

      {/* ========================================
          ADD MEMBER FORM
          ======================================== */}
      <div className="border-4 border-orange-500 p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">➕ Add Team Member</h2>

        <div className="space-y-2">
          <input
            type="text"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            placeholder="Name"
            className="border p-2 w-full"
          />
          <input
            type="text"
            value={newMemberRole}
            onChange={(e) => setNewMemberRole(e.target.value)}
            placeholder="Role (e.g., Developer)"
            className="border p-2 w-full"
          />
          <input
            type="email"
            value={newMemberEmail}
            onChange={(e) => setNewMemberEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 w-full"
          />

          <button
            onClick={addMember}
            disabled={!canAddMember}
            className="border-2 border-green-500 px-4 py-2 w-full disabled:opacity-50"
          >
            Add Member
          </button>
        </div>
      </div>

      {/* ========================================
          MEMBERS LIST
          ======================================== */}
      <div className="border-4 border-red-500 p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">👥 Team Members</h2>
          <button
            onClick={clearAllMembers}
            className="border px-3 py-1 text-sm"
          >
            Clear All
          </button>
        </div>

        {team.members.length === 0 ? (
          <p className="text-gray-400 text-center py-4">No members yet</p>
        ) : (
          <div className="space-y-3">
            {team.members.map((member) => (
              <div key={member.id} className="border-2 p-3 bg-gray-50">
                {/* Member Info */}
                <div className="space-y-2 mb-2">
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) =>
                      updateMemberName(member.id, e.target.value)
                    }
                    className="border p-1 w-full font-bold"
                  />
                  <input
                    type="text"
                    value={member.role}
                    onChange={(e) =>
                      updateMemberRole(member.id, e.target.value)
                    }
                    className="border p-1 w-full text-sm"
                  />
                  <input
                    type="email"
                    value={member.email}
                    onChange={(e) =>
                      updateMemberEmail(member.id, e.target.value)
                    }
                    className="border p-1 w-full text-sm"
                  />
                </div>

                {/* Skills Section */}
                <div className="mb-2">
                  <p className="font-bold text-sm mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.skills.length === 0 ? (
                      <span className="text-gray-400 text-xs">No skills</span>
                    ) : (
                      member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 px-2 py-1 text-xs rounded flex items-center gap-1"
                        >
                          {skill}
                          <button
                            onClick={() =>
                              removeSkillFromMember(member.id, index)
                            }
                            className="text-red-500 font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))
                    )}
                  </div>

                  <div className="flex gap-1">
                    <input
                      type="text"
                      placeholder="Add skill"
                      className="border p-1 text-xs flex-1"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const input = e.currentTarget;
                          if (input.value.trim()) {
                            addSkillToMember(member.id, input.value.trim());
                            input.value = "";
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      checked={member.isActive}
                      onChange={() => toggleMemberActive(member.id)}
                    />
                    <span>{member.isActive ? "✅ Active" : "❌ Inactive"}</span>
                  </label>

                  <button
                    onClick={() => removeMember(member.id)}
                    className="border border-red-500 px-2 py-1 text-xs ml-auto"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ========================================
          JSON PREVIEW
          ======================================== */}
      <div className="border-2 p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">🔍 Data Preview</h2>
        <pre className="text-xs overflow-auto max-h-60 bg-gray-100 p-2">
          {JSON.stringify(team, null, 2)}
        </pre>
      </div>

      {/* ========================================
          RESET ALL
          ======================================== */}
      <button
        onClick={resetAll}
        className="border-4 border-red-500 px-6 py-3 w-full text-lg font-bold hover:bg-red-50"
      >
        🔥 RESET EVERYTHING
      </button>
    </div>
  );
}
